import pandas as pd
import os
import sys

# Set inputs
mrtint_file = r'seo_data/organic-keywords-mrtint_ca.csv'
unique_file = r'seo_data/organic-keywords-uniqueautoinc_ca.csv'

def analyze_competitor(filepath, name):
    print(f"\n--- Analyzing {name} ---")
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    try:
        df = pd.read_csv(filepath)
        print(f"Loaded {len(df)} keywords.")
        
        # Filter for top rankings
        # Assuming columns: Keyword, Search Volume, Position, URL, etc.
        # Normalize columns
        df.columns = [c.strip() for c in df.columns]
        
        # High value: Pos <= 10, Volume >= 50
        top_performers = df[
            (df['Position'] <= 20) & 
            (df['Search Volume'] >= 50)
        ].sort_values(by='Position', ascending=True)
        
        print(f"Found {len(top_performers)} high-ranking keywords (Pos <= 20, Vol >= 50).")
        
        print("\nTop 15 Opportunities:")
        for index, row in top_performers.head(15).iterrows():
            print(f"- [{row['Position']}] {row['Keyword']} (Vol: {row['Search Volume']}) -> {row['URL']}")
            
        return top_performers
        
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

# Run analysis
analyze_competitor(mrtint_file, "Mr. Tint")
analyze_competitor(unique_file, "Unique Auto")
