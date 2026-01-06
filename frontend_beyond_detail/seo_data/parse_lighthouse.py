import json
import sys

try:
    with open('./seo_data/lighthouse_home_seo_updated.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    categories = data.get('categories', {})
    audits = data.get('audits', {})

    scores = {
        'Performance': categories.get('performance', {}).get('score', 0) * 100,
        'Accessibility': categories.get('accessibility', {}).get('score', 0) * 100,
        'Best Practices': categories.get('best-practices', {}).get('score', 0) * 100,
        'SEO': categories.get('seo', {}).get('score', 0) * 100,
    }

    metrics = {
        'LCP': audits.get('largest-contentful-paint', {}).get('displayValue'),
        'CLS': audits.get('cumulative-layout-shift', {}).get('displayValue'),
        'TBT': audits.get('total-blocking-time', {}).get('displayValue'),
        'FCP': audits.get('first-contentful-paint', {}).get('displayValue'),
        'Speed Index': audits.get('speed-index', {}).get('displayValue'),
    }

    output = []
    output.append("## Lighthouse Audit Results")
    output.append("| Category | Score |")
    output.append("| --- | --- |")
    for cat, score in scores.items():
        output.append(f"| {cat} | {score:.0f} |")

    output.append("\n## Core Web Vitals")
    output.append("| Metric | Value |")
    output.append("| --- | --- |")
    for metric, value in metrics.items():
        output.append(f"| {metric} | {value} |")

    with open('./seo_data/lighthouse_summary_utf8.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(output))

except Exception as e:
    with open('./seo_data/error_log.txt', 'w', encoding='utf-8') as f:
        f.write(f"Error parsing Lighthouse report: {e}")
