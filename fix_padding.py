import os
import re

directories = ['src/components', 'src/pages']

def process_file(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
    
    original_content = content
    
    # Replace <section className="py-X ... with <section className="pt-Y pb-X ...
    # We want to restore the top padding to a larger value so titles are not covered
    # If py-6 -> pt-16 pb-6
    # If py-8 -> pt-20 pb-8
    # If py-10 -> pt-24 pb-10
    # If py-12 -> pt-24 pb-12
    
    def replace_py(match):
        pre = match.group(1) # e.g. <section id="..." className="
        py_val = int(match.group(2))
        post = match.group(3)
        
        # Calculate pt based on py
        if py_val == 6:
            pt_val = 16
        elif py_val == 8:
            pt_val = 20
        elif py_val == 10:
            pt_val = 24
        elif py_val == 12:
            pt_val = 24
        else:
            pt_val = py_val + 8 # default fallback
            
        return f"{pre}pt-{pt_val} pb-{py_val} {post}"
        
    # We also want to replace "py-X" inside section classNames even if it's not the first class
    # The safest way is to find <section ... className="..." and replace py-X inside it
    
    def section_replacer(match):
        section_content = match.group(0)
        # Find py-X
        new_section = re.sub(r'\bpy-(\d+)\b', lambda m: f"pt-{int(m.group(1)) + 12} pb-{m.group(1)}", section_content)
        return new_section
        
    content = re.sub(r'<section[^>]+className="[^"]+"[^>]*>', section_replacer, content)

    # We also need to fix title sizes. user says "bajar el tamaño de los tirulos para que se miren todo parejo"
    # text-4xl -> text-3xl
    # text-3xl -> text-2xl
    content = re.sub(r'\btext-4xl\b', 'text-3xl', content)
    content = re.sub(r'\btext-3xl\b', 'text-2xl', content)

    if content != original_content:
        with open(filepath, 'w') as file:
            file.write(content)
        print(f"Fixed paddings in {filepath}")

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                process_file(os.path.join(root, file))

print("Padding fix complete.")
