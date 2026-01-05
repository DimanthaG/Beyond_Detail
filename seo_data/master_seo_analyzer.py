import pandas as pd
import glob
import os

def analyze_all_seo_data():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    print(f"Starting MASTER SEO ANALYSIS in: {base_dir}\n")

    # ==========================================
    # 1. ANALYZE ORGANIC KEYWORDS (Competitors)
    # ==========================================
    print("PART 1: COMPETITOR KEYWORD GAP ANALYSIS")
    keyword_files = glob.glob(os.path.join(base_dir, 'Organic Keywords', '*.csv'))
    
    if keyword_files:
        all_keywords = []
        for f in keyword_files:
            try:
                # Competitor name from filename
                competitor = os.path.basename(f).replace('organic-keywords-', '').replace('.csv', '')
                
                # Load CSV
                df = pd.read_csv(f)
                
                # Normalize column names
                df.columns = [c.lower().strip() for c in df.columns]
                
                # Check for standard Semrush/Ahrefs export columns
                kw_col = next((c for c in df.columns if 'keyword' in c), None)
                vol_col = next((c for c in df.columns if 'volume' in c), None)
                pos_col = next((c for c in df.columns if 'position' in c), None) 

                if kw_col and vol_col:
                    # Filter for top ranking keywords (Page 1-2)
                    top_kws = df[df[pos_col] <= 20] if pos_col else df.head(50)
                    
                    print(f"   > {competitor}: Found {len(df)} keywords. Top {len(top_kws)} high-ranking shown.")
                    
                    # Store for aggregation
                    top_kws = top_kws.copy()
                    top_kws['competitor'] = competitor
                    all_keywords.append(top_kws[[kw_col, vol_col, pos_col, 'competitor']])
            except Exception as e:
                print(f"   Error reading {os.path.basename(f)}: {e}")

        if all_keywords:
            master_df = pd.concat(all_keywords)
            # Sort by search volume
            master_df = master_df.sort_values(by=master_df.columns[1], ascending=False)
            
            print("\n   TOP 15 HIGH-VOLUME OPPORTUNITIES (Competitors Rank for These):")
            print(master_df.head(15).to_string(index=False))
    else:
        print("   No keyword CSVs found in 'Organic Keywords'.")
    print("\n" + "-"*40 + "\n")


    # ==========================================
    # 2. ANALYZE GRID REPORTS (Local SEO)
    # ==========================================
    print("PART 2: LOCAL GRID RANKINGS (Scarborough)")
    grid_files = glob.glob(os.path.join(base_dir, 'Grid Reports', '*.xlsx'))
    
    if grid_files:
        for f in grid_files:
            try:
                print(f"   > Analyzing: {os.path.basename(f)}")
                df = pd.read_excel(f)
                
                # Look for ranking columns
                cols = [c.lower() for c in df.columns]
                
                # Usually these reports have "Business Name" and "Rank"
                name_col = next((c for c in df.columns if 'business' in c.lower() or 'name' in c.lower()), None)
                rank_col = next((c for c in df.columns if 'rank' in c.lower() or 'avg' in c.lower()), None)

                if name_col and rank_col:
                    # Group by business and get average rank
                    avg_ranks = df.groupby(name_col)[rank_col].mean().sort_values().head(10)
                    print("\n   TOP 10 RATED BUSINESSES IN THIS GRID:")
                    print(avg_ranks.to_string())
                else:
                    print(f"   Could not identify Business/Rank columns. Columns found: {df.columns.tolist()}")

            except Exception as e:
                print(f"   Error processing grid report: {e}")
    else:
        print("   No Grid Reports found.")
    print("\n" + "-"*40 + "\n")

    # ==========================================
    # 3. ANALYZE NLP DATA (Semantic)
    # ==========================================
    print("PART 3: NLP SEMANTIC ANALYSIS (Re-Check)")
    nlp_files = glob.glob(os.path.join(base_dir, 'Text Analysis', '*.xlsx'))
    
    if nlp_files:
        print(f"   > Validating {len(nlp_files)} NLP Reports...")
        targets = ['salt', 'winter', 'uv', 'infrared', 'price', 'cost', 'ceramic', 'tint']
        
        found_concepts = set()
        
        for f in nlp_files:
            try:
                df = pd.read_excel(f)
                # Find entity column
                entity_col = next((c for c in df.columns if 'entity' in c.lower() or 'text' in c.lower()), None)
                
                if entity_col:
                    # Check for our targets
                    for target in targets:
                        if df[entity_col].astype(str).str.contains(target, case=False, na=False).any():
                            found_concepts.add(target.upper())
            except:
                pass
        
        print("\n   CONFIRMED NLP CONCEPTS ON SITE:")
        print(f"   {', '.join(sorted(found_concepts))}")
        
        missing = set(t.upper() for t in targets) - found_concepts
        if missing:
            print(f"   MISSING CONCEPTS: {', '.join(missing)}")
        else:
            print("   ALL TARGETS DETECTED!")

    else:
         print("   No NLP files found.")

    print("\nANALYSIS COMPLETE.")

if __name__ == "__main__":
    analyze_all_seo_data()
