import json
import os

files = {
    "Ceramic Coating Toronto": "seo_data/lh_toronto.json",
    "Car Detailing Markham Road": "seo_data/lh_markham.json"
}

print(f"{'Page':<30} | {'Perf':<5} | {'SEO':<5} | {'Access':<6} | {'Best P':<6} | {'LCP':<10}")
print("-" * 85)

for name, filepath in files.items():
    if not os.path.exists(filepath):
        print(f"{name:<30} | FILE NOT FOUND")
        continue
        
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        cats = data.get('categories', {})
        perf = int(cats.get('performance', {}).get('score', 0) * 100)
        seo = int(cats.get('seo', {}).get('score', 0) * 100)
        acc = int(cats.get('accessibility', {}).get('score', 0) * 100)
        bp = int(cats.get('best-practices', {}).get('score', 0) * 100)
        
        lcp = data.get('audits', {}).get('largest-contentful-paint', {}).get('displayValue', 'N/A')
        
        print(f"{name:<30} | {perf:<5} | {seo:<5} | {acc:<6} | {bp:<6} | {lcp:<10}")
        
    except Exception as e:
        print(f"{name:<30} | Error: {str(e)}")
