import re
import os

mappings = {
    "butyl-glycol": {"id": "butyl-glycol", "pdf": "BULK-BUTYL-GLYCOL MSDS & TDS.pdf"},
    "ethyl-acetate": {"id": "ethyl-acetate-msds", "pdf": "Ethyle Acetate MSDS & TDS.pdf"},
    "butyl-acetate": {"id": "butyl-acetate", "pdf": "Butyl Acetate MSDS & TDS.pdf"},
    "mek": {"id": "mek", "pdf": "BULK-METHYL-ETHYL-KETONE MEK MSDS & TDS.pdf"},
    "toluene": {"id": "toluene", "pdf": "Toluene MSDS & TDS.pdf"},
    "xylene": {"id": "mix-xylene", "pdf": "Mix Xylene MSDS & TDS.pdf"},
    "acetone": {"id": "acetone", "pdf": "Acetone MSDS.pdf"},
    "labsa": {"id": "labsa-96", "pdf": "Labsa COA.pdf"},
    "sles": {"id": "sles-70", "pdf": "SLES-COA zhechem.pdf"},
    "caustic-soda": {"id": "caustic-soda-flakes", "pdf": "Caustic Soda Flakes COA.pdf"},
    "soda-ash-light": {"id": "soda-ash-light", "pdf": "Specification   Soda Ash Light .pdf"},
    "aluminum-sulphate": {"id": "aluminium-sulphate", "pdf": "ALUMINIUM-SULPHATE- COA.pdf"},
    "citric-acid": {"id": "citric-acid-monohydrate", "pdf": "CITRIC ACID MONOHYDRATE  COA.pdf"},
    "acetic-acid": {"id": "acetic-acid", "pdf": "Acetic Acid MSDS.pdf"},
    "glycerine": {"id": "glycerine", "pdf": "GLYCERINE MSDS & TDS.pdf"},
    "propylene-glycol": {"id": "propylene-glycol-usp", "pdf": "PROPLYENE-GLYCOL-USP MSDS & TDS.pdf"},
    "titanium-dioxide": {"id": "titanium-dioxide-ar", "pdf": "Titanium Dioxide.pdf"},
    "zinc-oxide": {"id": "zinc-oxide-usp", "pdf": "Zinc Oxide, USP.pdf"},
    "sodium-cyanide": {"id": "sodium-cyanide", "pdf": "Sodium cyanide COA.pdf"},
    "hydrogen-peroxide": {"id": "hydrogen-peroxide-35", "pdf": "HYDROGEN PEROXIDE COA.pdf"},
    "ferric-chloride": {"id": "ferric-chloride-anhydrous", "pdf": "Ferric Chloride COA.pdf"},
    "calcium-hypochlorite": {"id": "calcium-hypochlorite-lr", "pdf": "CALCIUM HYPOCHLORITE COA.pdf"},
    "sodium-benzoate": {"id": "sodium-benzoate", "pdf": "Sodium Benzoate COA.pdf"},
    "potassium-sorbate": {"id": "potassium-sorbate", "pdf": "Potassium Sorbate COA.pdf"},
    "stearic-acid": {"id": "stearic-acid", "pdf": "Stearic Acid COA.pdf"},
    "hydrochloric-acid": {"id": "hydrochloric-acid-ar", "pdf": "HYDROCHLORIC ACID COA.pdf"},
    "sulphuric-acid": {"id": "sulphuric-acid-ar", "pdf": "SULPHURIC ACID  COA.pdf"},
    "sodium-silicate": {"id": "sodium-silicate-cullets", "pdf": "Soidum Silicate COA.pdf"},
    "sodium-nitrate": {"id": "sodium-nitrate-coated", "pdf": "Sodium Nitrate coated grade.pdf"},
    "sodium-sulphate": {"id": "sodium-sulphate-anhydrous", "pdf": "Sodium Sulphate Anhydrous.pdf"},
    "tdi": {"id": "toluene-diisocyanate", "pdf": "TOLUENE-DIISOCYANATE MSDS & TDS.pdf"},
    "mdi": {"id": "mdi-polymeric", "pdf": "Methylene Diphenyl Diisocyanate (MDI) COA.pdf"},
    "ipa": {"id": "isopropyl-alcohol", "pdf": "ISOPROPYL-ALCOHOL MSDS & TDS.pdf"},
    "nitrocellulose": {"id": "nitrocellulose-cotton", "pdf": "Nitrocellulose Cotton COA.pdf"}
}

file_path = "/Users/tirth/Documents/work/halarPetrochemical/src/data/products.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# First update interface
interface_target = """    handling?: string;
}"""
interface_replacement = """    handling?: string;
    chemicalId?: string;
    msdsPdfKey?: string;
}"""

if interface_target in content:
    content = content.replace(interface_target, interface_replacement)

# Update each product
for slug, data in mappings.items():
    # Find the block starting with slug: 'x',
    pattern = r"(slug:\s*['\"]" + slug + r"['\"],\s*\n\s*category:\s*['\"][^'\"]+['\"],)"
    replacement = r"\1\n        chemicalId: '" + data["id"] + r"',\n        msdsPdfKey: '" + data["pdf"] + r"',"
    content = re.sub(pattern, replacement, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated products.tsx successfully.")
