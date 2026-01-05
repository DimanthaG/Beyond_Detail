import zipfile
import re
import glob
import os

def clean_tag(xml_content):
    # Simple regex to remove XML tags and keep text
    return re.sub(r'<[^>]+>', '', xml_content)

def analyze_xlsx_native():
    xlsx_files = sorted(glob.glob('*.xlsx'))
    
    if not xlsx_files:
        print("No Excel files found.")
        return

    print(f"Found {len(xlsx_files)} NLP reports. Analyzing raw content...\n")

    targets = ['infrared', 'hydrophobic', 'salt', 'swirl', 'uv', 'mobile', 'cost', 'price', 'detailing', 'tint', 'ceramic']

    for file in xlsx_files:
        print(f"--- Analyzing: {file} ---")
        try:
            with zipfile.ZipFile(file, 'r') as z:
                # sharedStrings.xml usually contains all the text data in the workbook
                if 'xl/sharedStrings.xml' in z.namelist():
                    with z.open('xl/sharedStrings.xml') as f:
                        content = f.read().decode('utf-8')
                        
                        # Extract distinct text strings roughly
                        # This isn't a perfect table parser, but good enough to find content
                        # We split by <t> tags which usually hold the text in Excel XML
                        strings = re.findall(r'<t[^>]*>(.*?)</t>', content)
                        
                        # Convert to lowercase for search
                        lower_strings = [s.lower() for s in strings]
                        
                        print(f"Found {len(strings)} unique text entries.")
                        
                        # Check for targets
                        print("> Target Keyword Check:")
                        found_any = False
                        for target in targets:
                            # Check if any string contains the target
                            matching = [s for s in strings if target in s.lower()]
                            if matching:
                                found_any = True
                                # Show top 3 matches for this target
                                print(f"  - '{target}': Found! (e.g., {matching[:2]})")
                        
                        if not found_any:
                            print("  (No specific target keywords found in text data)")
                            
                        # Dump some top occurring or interesting strings if needed
                        # But for now, just verifying specific keyword presence is key.
                        
                else:
                    print("Could not find 'xl/sharedStrings.xml'. File structure might be different.")

        except Exception as e:
            print(f"Error reading {file}: {e}")
        
        print("\n" + "="*40 + "\n")

if __name__ == "__main__":
    analyze_xlsx_native()
