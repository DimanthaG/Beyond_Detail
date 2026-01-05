import pandas as pd
import os
import sys

# Set encoding to utf-8 for console output
sys.stdout.reconfigure(encoding='utf-8')

file_path = r'C:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\grid_points_businesses_window tinting scarborough.xlsx'

print(f"Analyzing file: {file_path}")

try:
    if not os.path.exists(file_path):
        print("Error: File not found.")
        sys.exit(1)

    # Load the Excel file
    try:
        df = pd.read_excel(file_path)
        print("File loaded successfully.")
    except Exception as e:
        print(f"Error loading Excel file via Pandas: {e}")
        # Fallback or exit?
        sys.exit(1)
    
    # Normalize column names
    df.columns = [str(col).strip() for col in df.columns]
    print(f"Columns found: {list(df.columns)}")

    # Identify relevant columns
    # We look for 'Rank' and 'Business Name'
    rank_col = next((c for c in df.columns if 'rank' in c.lower()), None)
    name_col = next((c for c in df.columns if 'business' in c.lower() or 'name' in c.lower()), None)

    if not rank_col:
        print("Could not find a 'Rank' column.")
    if not name_col:
        print("Could not find a 'Business Name' column.")

    if rank_col and name_col:
        print(f"Using columns: Rank='{rank_col}', Business='{name_col}'")
        
        # Filter for top 3 rankings
        # Ensure rank is numeric
        df[rank_col] = pd.to_numeric(df[rank_col], errors='coerce')
        
        top3_df = df[(df[rank_col] >= 1) & (df[rank_col] <= 3)]
        
        if top3_df.empty:
            print("No top 3 rankings found.")
        else:
            # Count businesses
            counts = top3_df[name_col].value_counts()
            
            print("\n--- TOP COMPETITORS (Rank 1-3) ---")
            for name, count in counts.items():
                print(f"{name}: {count}")
            
            print(f"\nTop Competitor: {counts.index[0]}")
    else:
        print("Showing first 3 rows to help debug:")
        print(df.head(3))

except Exception as e:
    print(f"An unexpected error occurred: {e}")
