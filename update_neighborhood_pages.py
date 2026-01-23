"""
Script to add TrustBadges and SkillShowcase to all neighborhood pages
"""
import os
import re

# Directory containing neighborhood pages
NEIGHBORHOODS_DIR = r"c:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\Pages\Neighborhoods"

def update_neighborhood_file(filepath):
    """Add TrustBadges and SkillShowcase to a neighborhood page"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Skip if already has TrustBadges or SkillShowcase
    if 'TrustBadges' in content or 'SkillShowcase' in content:
        print(f"✓ Skipping {os.path.basename(filepath)} - already updated")
        return False
    
    original_content = content
    
    # Step 1: Add lazy imports for TrustBadges and SkillShowcase
    # Find the last lazy import line
    lazy_import_pattern = r'(const \w+ = lazy\(\(\) => import\([^)]+\)\);)'
    lazy_imports = list(re.finditer(lazy_import_pattern, content))
    
    if lazy_imports:
        last_import = lazy_imports[-1]
        insert_pos = last_import.end()
        
        # Add new imports after the last lazy import
        new_imports = "\nconst TrustBadges = lazy(() => import('../../components/TrustBadges/TrustBadges'));\nconst SkillShowcase = lazy(() => import('../../components/SkillShowcase/SkillShowcase'));"
        content = content[:insert_pos] + new_imports + content[insert_pos:]
    
    # Step 2: Add TrustBadges and SkillShowcase before Contact component
    # Find the Contact component
    contact_pattern = r'(\s*<Suspense fallback={null}>\s*<Contact />\s*</Suspense>|\s*<Contact />)'
    contact_match = re.search(contact_pattern, content)
    
    if contact_match:
        insert_pos = contact_match.start()
        
        # Add TrustBadges and SkillShowcase before Contact
        new_components = """
            <Suspense fallback={null}>
              <TrustBadges />
            </Suspense>

            <Suspense fallback={null}>
              <SkillShowcase />
            </Suspense>

"""
        content = content[:insert_pos] + new_components + content[insert_pos:]
    
    # Only write if content changed
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated {os.path.basename(filepath)}")
        return True
    else:
        print(f"✗ No changes made to {os.path.basename(filepath)}")
        return False

def main():
    """Update all neighborhood pages"""
    if not os.path.exists(NEIGHBORHOODS_DIR):
        print(f"Error: Directory not found: {NEIGHBORHOODS_DIR}")
        return
    
    files = [f for f in os.listdir(NEIGHBORHOODS_DIR) if f.endswith('.jsx')]
    
    print(f"\nFound {len(files)} neighborhood page files")
    print("=" * 60)
    
    updated_count = 0
    for filename in sorted(files):
        filepath = os.path.join(NEIGHBORHOODS_DIR, filename)
        if update_neighborhood_file(filepath):
            updated_count += 1
    
    print("=" * 60)
    print(f"\n✓ Successfully updated {updated_count} out of {len(files)} files")

if __name__ == "__main__":
    main()
