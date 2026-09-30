const fs = require('fs');
let code = fs.readFileSync('frontend/src/pages/ProjectsList/index.tsx', 'utf-8');

code = code.replace(/<div className="pt-4 border-t border-gray-100 flex items-center justify-between">\s*<div className="flex flex-col gap-1">\s*<span className="text-\[10px\] text-gray-500 font-medium uppercase">Total Dokumen<\/span>\s*<span className="text-sm font-bold text-\[#172033\]">\{project\.document_count \|\| 0\}<\/span>\s*<\/div>/g, 
`<div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-500 font-medium uppercase">Total Dokumen</span>
                  <span className="text-sm font-bold text-[#172033]">{project.document_count || 0}</span>
                </div>`);

// Also fix the unclosed extra </div> and <FiFolder>
code = code.replace(/<\/div>\s*<FiFolder size=\{20\} \/>\s*<\/div>/g, ``);

fs.writeFileSync('frontend/src/pages/ProjectsList/index.tsx', code);
