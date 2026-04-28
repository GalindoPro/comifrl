import os
import re

directories = ['src/components', 'src/pages']

def process_file(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
    
    original_content = content
    
    # Fix messed up responsive sizes
    content = re.sub(r'text-2xl md:text-2xl', 'text-2xl md:text-3xl', content)
    content = re.sub(r'text-3xl md:text-3xl', 'text-3xl md:text-4xl', content)
    content = re.sub(r'text-2xl md:text-3xl font-black text-white', 'text-3xl md:text-4xl font-black text-white', content)
    
    if content != original_content:
        with open(filepath, 'w') as file:
            file.write(content)
        print(f"Fixed text sizes in {filepath}")

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                process_file(os.path.join(root, file))

print("Text size fix complete.")
