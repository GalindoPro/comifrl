import os
import re

directories = ['src/components', 'src/pages']

replacements = {
    # Padding Top/Bottom
    r'\bpy-24\b': 'py-12',
    r'\bpy-20\b': 'py-10',
    r'\bpy-16\b': 'py-8',
    r'\bpy-14\b': 'py-8',
    r'\bpy-12\b': 'py-6',
    r'\bpy-10\b': 'py-6',
    
    # Margin Bottom
    r'\bmb-24\b': 'mb-12',
    r'\bmb-20\b': 'mb-10',
    r'\bmb-16\b': 'mb-8',
    r'\bmb-12\b': 'mb-6',
    r'\bmb-10\b': 'mb-6',

    # Gap
    r'\bgap-16\b': 'gap-8',
    r'\bgap-12\b': 'gap-6',
    r'\bgap-10\b': 'gap-6',
    
    # Text sizes (optional, let's just do spacing first, but maybe text-5xl to text-4xl)
    r'\btext-5xl\b': 'text-4xl',
    r'\btext-4xl\b': 'text-3xl',
}

def process_file(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
    
    original_content = content
    
    for pattern, replacement in replacements.items():
        content = re.sub(pattern, replacement, content)
        
    if content != original_content:
        with open(filepath, 'w') as file:
            file.write(content)
        print(f"Updated {filepath}")

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                process_file(os.path.join(root, file))

print("Spacing reduction complete.")
