import os
import glob

directory = r'c:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\Pages\Neighborhoods'
count = 0

print(f"Scanning {directory}...")

for filepath in glob.glob(os.path.join(directory, "*.jsx")):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    
    # Replacement 1: Meta description / SEO
    new_content = new_content.replace('68 Five-Star Reviews', '70+ Five-Star Reviews')
    
    # Replacement 2: Body text
    new_content = new_content.replace('68+ five-star reviews', '70+ five-star reviews')
    
    # Replacement 3: Variation often found in description
    new_content = new_content.replace('⭐ 68 Five-Star Reviews', '⭐ 70+ Five-Star Reviews')

    if new_content != content:
        print(f"Updating {os.path.basename(filepath)}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1

print(f"Updated {count} files.")
