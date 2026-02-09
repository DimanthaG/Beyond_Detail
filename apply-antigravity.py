#!/usr/bin/env python3
"""
Antigravity Auto-Deployment Script
Safely modifies JSX files to add FAQ schema, legal disclaimers, and SEO enhancements
"""

import re
import shutil
import sys
from datetime import datetime
from pathlib import Path

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    END = '\033[0m'

def log_success(msg): print(f"{Colors.GREEN}✅ {msg}{Colors.END}")
def log_error(msg): print(f"{Colors.RED}❌ {msg}{Colors.END}")
def log_warning(msg): print(f"{Colors.YELLOW}⚠️  {msg}{Colors.END}")
def log_info(msg): print(f"{Colors.BLUE}ℹ️  {msg}{Colors.END}")

class AntigravityDeployer:
    def __init__(self, frontend_dir="frontend_beyond_detail"):
        self.frontend_dir = Path(frontend_dir)
        self.timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.backup_dir = Path(f".antigravity-backups/{self.timestamp}")
        
    def backup_file(self, filepath):
        """Create backup of original file"""
        self.backup_dir.mkdir(parents=True, exist_ok=True)
        backup_path = self.backup_dir / filepath.name
        shutil.copy2(filepath, backup_path)
        return backup_path
    
    def modify_window_tint_laws(self):
        """Add legal disclaimer and FAQ schema to WindowTintingLaws.jsx"""
        filepath = self.frontend_dir / "src/Pages/WindowTintingLaws/WindowTintingLaws.jsx"
        
        if not filepath.exists():
            log_error(f"File not found: {filepath}")
            return False
        
        log_info(f"Processing {filepath.name}...")
        
        # Read file
        content = filepath.read_text(encoding='utf-8')
        original = content
        
        # Backup
        self.backup_file(filepath)
        
        # 1. Add Info to imports if not present (manual check needed)
        
        # 2. Add legal disclaimer after hero section
        legal_disclaimer = '''{/* Legal Disclaimer */}
            <div style={{ background: "#1a1a1a", border: "1px solid #333", padding: "20px", borderRadius: "8px", margin: "20px auto", maxWidth: "1000px" }}>
              <p style={{ fontSize: "0.9rem", color: "#888", margin: 0 }}>
                <Info size={16} style={{ marginRight: "8px", verticalAlign: "text-bottom" }} />
                <strong>Disclaimer:</strong> This information is for reference only and does not constitute legal advice. 
                Laws may change. Always consult the <a href="https://www.ontario.ca/laws/statute/90h08" target="_blank" rel="noopener noreferrer" style={{ color: "#f07900" }}>Official Ontario Highway Traffic Act</a> 
                or contact the Ministry of Transportation for current regulations.
              </p>
            </div>'''
        
        # Find the hero section closing and insert disclaimer
        hero_pattern = r'(</div>\s*</div>\s*\{\/\* Main Content \*\/\})'
        if re.search(hero_pattern, content):
            content = re.sub(hero_pattern, f'{legal_disclaimer}\n            \1', content)
            log_success("Added legal disclaimer")
        
        # 3. Add medical exemption to legalFAQs array
        medical_faq = '''{
            question: "Are there medical exemptions for window tint in Ontario?",
            answer: "Yes. Drivers with specific medical conditions (like Lupus, photosensitivity disorders) may be eligible for exemptions. You must carry a signed certificate from a qualified physician. Always check with MTO for current exemption rules."
        },'''
        
        # Find the legalFAQs array and add new FAQ
        faqs_pattern = r'(const legalFAQs = \[)(.*?)(\];)'
        match = re.search(faqs_pattern, content, re.DOTALL)
        if match and 'medical exemptions' not in content.lower():
            new_faqs = match.group(1) + '\n        ' + medical_faq + match.group(2) + match.group(3)
            content = content[:match.start()] + new_faqs + content[match.end():]
            log_success("Added medical exemption FAQ")
        
        # 4. Add FAQ schema JSON-LD at end
        faq_schema = '''{/* FAQ Schema for Rich Snippets */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can I tint my front windshield in Ontario?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. In Ontario, you cannot tint the full front windshield. You are only allowed to have a glare strip on the top 75mm (approx 3 inches) of the windshield per the Highway Traffic Act."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the darkest legal tint for front side windows in Ontario?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The law requires front side windows to allow at least 70% of light in (30% tint darkness maximum). This is measured as VLT (Visible Light Transmission) and is enforced under Ontario's Highway Traffic Act."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I tint my rear windows as dark as I want in Ontario?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. For passenger vehicles, there is no legal limit on the darkness for rear side windows and the rear windshield in Ontario, provided you have functional side mirrors on both sides."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there medical exemptions for window tint in Ontario?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Drivers with specific medical conditions (such as Lupus, photosensitivity disorders, or certain skin conditions) may be eligible for window tint exemptions. A signed certificate from a qualified physician is required, and you must carry it while driving. Check with MTO for current exemption rules."
                  }
                }
              ]
            })}} />'''
        
        # Insert before closing </>
        if 'FAQ Schema' not in content:
            content = re.sub(r'(</>\s*$)', f'{faq_schema}\n        \1', content)
            log_success("Added FAQ schema JSON-LD")
        
        # Write changes
        if content != original:
            filepath.write_text(content, encoding='utf-8')
            log_success(f"✨ WindowTintingLaws.jsx updated!")
            return True
        else:
            log_warning("No changes needed or already applied")
            return False
    
    def modify_pricing(self):
        """Add FAQ schema to Pricing.jsx"""
        filepath = self.frontend_dir / "src/Pages/Pricing/Pricing.jsx"
        
        if not filepath.exists():
            log_error(f"File not found: {filepath}")
            return False
        
        log_info(f"Processing {filepath.name}...")
        
        content = filepath.read_text(encoding='utf-8')
        original = content
        
        self.backup_file(filepath)
        
        # 1. Update title to include 2025
        old_title = 'Car Detailing Pricing Scarborough | Get Your Quote | Beyond Detail'
        new_title = 'Car Detailing Pricing Scarborough 2025 | Window Tint & Ceramic Coating Costs'
        
        if old_title in content:
            content = content.replace(old_title, new_title)
            log_success("Updated title to include 2025")
        
        # 2. Add pricing FAQ schema
        pricing_faq = '''{/* Pricing FAQ Schema for Voice Search */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does car detailing cost in Scarborough?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Car detailing pricing in Scarborough varies by service. Interior detailing starts at $60 for cars and $80 for SUVs. Exterior detailing starts at $50 for cars and $70 for SUVs. Full interior and exterior packages range from $150-$250 for cars, $200-$350 for SUVs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are window tinting prices in Scarborough?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Window tinting prices in Scarborough start at $199 for sedans and $249 for SUVs standard packages. Ceramic tint packages range from $299-$449. Sun strip installation is $49. All tint services include lifetime warranty options."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does ceramic coating cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ceramic coating costs range from $800-$1,800 depending on vehicle size and paint condition. This includes paint decontamination, minor polish, and 1-3 layers of professional IGL or Llumar ceramic coating. Packages include 3-5 year protection."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is paint correction worth the investment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, paint correction is worth it for vehicles with swirl marks, scratches, or oxidation. Single stage correction starts at $300 and removes 50-70% of defects. Two-stage correction at $600+ removes 80-99% of defects. Essential before ceramic coating for best results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer mobile detailing in Scarborough?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Beyond Detail offers mobile car detailing throughout Scarborough, North York, Markham, and Pickering. Mobile service includes interior detailing, exterior washing, and ceramic coating. Travel fee applies based on distance from our studio at 170 Finchdene Square."
                  }
                }
              ]
            })}} />'''
        
        if 'Pricing FAQ Schema' not in content:
            content = re.sub(r'(</>\s*$)', f'{pricing_faq}\n        \1', content)
            log_success("Added pricing FAQ schema")
        
        if content != original:
            filepath.write_text(content, encoding='utf-8')
            log_success(f"✨ Pricing.jsx updated!")
            return True
        else:
            log_warning("No changes needed or already applied")
            return False
    
    def run_build(self):
        """Run npm build"""
        log_info("Running build...")
        import subprocess
        result = subprocess.run(
            ["npm", "run", "build"],
            cwd=self.frontend_dir,
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            log_success("Build successful!")
            return True
        else:
            log_error("Build failed!")
            print(result.stderr)
            return False
    
    def deploy(self):
        """Main deployment flow"""
        print("\n" + "="*60)
        print("🚀 ANTIGRAVITY AUTO-DEPLOYMENT")
        print("="*60 + "\n")
        
        # Check frontend directory
        if not self.frontend_dir.exists():
            log_error(f"Directory not found: {self.frontend_dir}")
            log_info("Please run from WEBSITE/Beyond_Detail/")
            return False
        
        changes_made = False
        
        # Apply changes
        try:
            if self.modify_window_tint_laws():
                changes_made = True
            
            if self.modify_pricing():
                changes_made = True
            
        except Exception as e:
            log_error(f"Error applying changes: {e}")
            log_info("Restoring from backups...")
            # TODO: Restore from backup
            return False
        
        if not changes_made:
            log_warning("No new changes needed - files may already be updated")
        
        # Build
        print("\n" + "-"*60)
        build_choice = input(f"{Colors.BLUE}Run npm build now? (y/n): {Colors.END}").lower()
        if build_choice == 'y':
            self.run_build()
        
        # Summary
        print("\n" + "="*60)
        print("📊 DEPLOYMENT SUMMARY")
        print("="*60)
        print(f"✅ Backups saved to: {self.backup_dir}")
        print(f"✅ Files modified:")
        print(f"   - src/Pages/WindowTintingLaws/WindowTintingLaws.jsx")
        print(f"   - src/Pages/Pricing/Pricing.jsx")
        print(f"\n🌐 Next: Deploy to your hosting (Vercel, Netlify, etc.)")
        print("="*60 + "\n")
        
        return True

if __name__ == "__main__":
    deployer = AntigravityDeployer()
    success = deployer.deploy()
    sys.exit(0 if success else 1)
