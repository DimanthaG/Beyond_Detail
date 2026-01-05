import pandas as pd
import sys

try:
    file_path = 'grid_points_businesses_window tinting scarborough.xlsx'
    print(f"Reading {file_path}...")
    
    df = pd.read_excel(file_path)
    
    # Normalize columns
    df.columns = [str(c).lower().strip() for c in df.columns]
    
    # Find rank and name columns
    rank_col = next((c for c in df.columns if 'rank' in c), None)
    name_col = next((c for c in df.columns if 'business' in c or 'name' in c), None)
    
    with open('analysis_result.txt', 'w', encoding='utf-8') as f:
        if rank_col and name_col:
            # Filter top 3
            df[rank_col] = pd.to_numeric(df[rank_col], errors='coerce')
            top3 = df[(df[rank_col] >= 1) & (df[rank_col] <= 3)]
            
            if top3.empty:
                f.write("No competitors found in top 3 rankings.\n")
            else:
                counts = top3[name_col].value_counts()
                f.write(f"Total Top 3 Rankings Found: {len(top3)}\n\n")
                f.write("TOP COMPETITORS (Rank 1-3 Count):\n")
                f.write("===================================\n")
                for name, count in counts.items():
                    f.write(f"{name}: {count}\n")
        else:
            f.write("ERROR: Could not find 'Rank' or 'Business Name' columns.\n")
            f.write(f"Columns found: {list(df.columns)}\n")

    print("Analysis complete. Results written to analysis_result.txt")

except Exception as e:
    with open('analysis_result.txt', 'w', encoding='utf-8') as f:
        f.write(f"CRITICAL ERROR: {str(e)}\n")
    print(f"Error: {e}")
