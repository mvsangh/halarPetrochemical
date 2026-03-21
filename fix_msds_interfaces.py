import re

file_path = "/Users/tirth/Documents/work/halarPetrochemical/msds/msds.ts"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Unify everything into the top interface.
# We will just strip out the re-declarations from the file.

# The declarations we want to remove look like this:
# /**
#  * Detailed Chemical Product Interface (Continued)
#  */
# export interface ChemicalSpecification {
# ...
# export interface ChemicalProduct {
# ...
#   origin?: string;
# }

new_lines = []
skip = False
for i, line in enumerate(lines):
    if line.startswith("/**") and i + 1 < len(lines) and "Detailed Chemical Product Interface" in lines[i+1] and "Continued" in lines[i+1]:
        skip = True
        
    if skip:
        if line.startswith("}") and i > 0 and lines[i-1].strip() == "origin?: string;":
            skip = False
        continue

    new_lines.append(line)

content = "".join(new_lines)

# Now we need to update the FIRST ChemicalProduct interface to include all optional fields that might have been added.
# Identifiers needs: dangerousGoodsNumber?: string; chemicalFormula?: string;
# details needs: steamPressure?: string; relativeMolecularMass?: string;
# dates needs: samplingDate?: string;
# safetyInfo needs: symptoms?: Record<string, string>; preventiveMeasures?: Record<string, string>; fireExtinguisher?: string; spillage?: string; storageInfo?: string;

replacements = {
    "inciName?: string;": "inciName?: string;\n    dangerousGoodsNumber?: string;",
    "introduction?: string;": "introduction?: string;\n    steamPressure?: string;\n    relativeMolecularMass?: string;",
    "retestDate?: string;": "retestDate?: string;\n    samplingDate?: string;",
    "firstAid?: Record<string, string>;": "firstAid?: Record<string, string>;\n    symptoms?: Record<string, string>;\n    preventiveMeasures?: Record<string, string>;\n    fireExtinguisher?: string;\n    spillage?: string;\n    storageInfo?: string;"
}

for k, v in replacements.items():
    content = content.replace(k, v)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Unified interfaces in msds.ts")
