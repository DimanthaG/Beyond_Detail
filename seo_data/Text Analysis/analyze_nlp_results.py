import pandas as pd
import glob
import os

def analyze_nlp_reports():
    # Get the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    print(f"Searching in: {script_dir}")
    
    # Get all xlsx files in that directory
    excel_files = sorted(glob.glob(os.path.join(script_dir, '*.xlsx')))
    
    if not excel_files:
        print("No Excel files found.")
        return

    print(f"Found {len(excel_files)} NLP reports. Analyzing with Pandas...\n")

    page_map = {
        'item_1': 'Home Page',
        'item_2': 'Window Tint Page',
        'item_3': 'Ceramic Coating Page',
        'item_4': 'Paint Correction Page',
        'item_5': 'Mobile Detailing Page'
    }

    # Target keywords to check for
    targets = ['infrared', 'hydrophobic', 'salt', 'swirl', 'uv', 'mobile', 'cost', 'price', 'tint', 'ceramic', 'legal', 'law']

    for file in excel_files:
        # Determine page name
        page_name = "Unknown Page"
        for key, name in page_map.items():
            if key in file:
                page_name = name
                break
        
        print(f"--- {page_name} ({file}) ---")
        
        try:
            # Read Excel file
            df = pd.read_excel(file)
            
            # Identify columns
            cols = [c.lower() for c in df.columns]
            entity_col = next((c for c in df.columns if 'entity' in c.lower() or 'text' in c.lower() or 'topic' in c.lower()), None)
            score_col = next((c for c in df.columns if 'salience' in c.lower() or 'score' in c.lower() or 'importance' in c.lower() or 'relevance' in c.lower()), None)

            if entity_col and score_col:
                print(f"  Columns Detected: Entity='{entity_col}', Score='{score_col}'")
                
                # Sort by score descending
                df_sorted = df.sort_values(score_col, ascending=False)
                
                # Show top 5
                print("\n  > Top 5 Entities by Relevance:")
                print(df_sorted[[entity_col, score_col]].head(5).to_string(index=False))
                
                # Check targets
                print("\n  > Target Keyword Check:")
                mask = df[entity_col].astype(str).str.contains('|'.join(targets), case=False, na=False)
                found_targets = df[mask]
                
                if not found_targets.empty:
                    # Sort found targets by score
                    found_targets = found_targets.sort_values(score_col, ascending=False)
                    print(found_targets[[entity_col, score_col]].to_string(index=False))
                else:
                    print("  No specialized target keywords found in this report.")

            else:
                print("  Could not automatically identify Entity/Score columns.")
                print(f"  Available columns: {df.columns.tolist()}")

        except Exception as e:
            print(f"  Error processing {file}: {e}")
        
        print("\n" + "="*50 + "\n")

if __name__ == "__main__":
    analyze_nlp_reports()
