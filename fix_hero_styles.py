import os
import re

# Directory to search
search_dir = r"c:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\frontend_beyond_detail\src\components"

# Regex pattern to match the block
pattern = re.compile(r"&--highlight\s*\{[^}]*font-size:\s*0\.65em;[^}]*@media screen and \(min-width: 640px\)\s*\{\s*font-size:\s*0\.7em;\s*\}[^}]*@media screen and \(min-width: 768px\)\s*\{\s*font-size:\s*0\.75em;\s*\}[^}]*@media screen and \(min-width: 1024px\)\s*\{\s*font-size:\s*0\.8em;\s*\}[^}]*@media screen and \(min-width: 1280px\)\s*\{\s*font-size:\s*0\.85em;\s*\}", re.DOTALL)

# Replacement block (simplified for regex replacement, but I'll use string replacement for safety)
# Actually, since the content is identical, I can just replace the specific lines.

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if file needs update
    if "font-size: 0.65em;" in content and "&--highlight" in content:
        print(f"Updating {filepath}...")
        
        # Replace font sizes
        new_content = content.replace("font-size: 0.65em;", "font-size: 0.55em;\n    white-space: nowrap;")
        new_content = new_content.replace("font-size: 0.7em;", "font-size: 0.6em;")
        new_content = new_content.replace("font-size: 0.75em;", "font-size: 0.65em;")
        new_content = new_content.replace("font-size: 0.8em;", "font-size: 0.7em;")
        new_content = new_content.replace("font-size: 0.85em;", "font-size: 0.75em;")
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Done.")

for root, dirs, files in os.walk(search_dir):
    for file in files:
        if file.endswith("Hero.scss") and file != "TintsHero.scss": # Skip TintsHero as it's already done
            process_file(os.path.join(root, file))
