const fs = require('fs');

const file = 'frontend/src/pages/DedOverview/index.tsx';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(/setSections\(res\.data\);/, `setSections(res.data.sections);`);

// Update how sections are rendered to support multiple levels
code = code.replace(/<div className="flex flex-col gap-4">\s*\{sections\.map[\s\S]*?(?=\{sections\.length === 0)/,
`<div className="flex flex-col gap-4">
        {sections.map((kriteria) => {
          const isExpanded = expandedId === kriteria.id;
          return (
            <div key={kriteria.id} className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition"
                onClick={() => setExpandedId(isExpanded ? null : kriteria.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-gray-400">
                    {isExpanded ? <FiChevronDown size={20} /> : <FiChevronRight size={20} />}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-[#163A5F] text-white px-2 py-0.5 rounded uppercase font-mono">
                        {kriteria.code}
                      </span>
                      <h3 className="text-[15px] font-bold text-[#172033]">{kriteria.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="p-0 border-t border-[#E4E7EC]">
                  {kriteria.children?.map((dimensi: any) => (
                    <div key={dimensi.id} className="border-b border-[#E4E7EC] last:border-b-0">
                      <div className="bg-[#F7F9FC] px-6 py-3 flex items-center gap-3">
                        <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase font-mono">{dimensi.code}</span>
                        <span className="text-sm font-bold text-[#172033]">{dimensi.title}</span>
                      </div>
                      <div className="bg-white divide-y divide-[#E4E7EC]">
                        {dimensi.children?.map((indikator: any) => (
                          <div key={indikator.id} className="px-8 py-4 flex justify-between items-center hover:bg-gray-50 transition">
                            <div className="flex flex-col gap-1 max-w-[60%]">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded uppercase font-mono">{indikator.code}</span>
                                <span className="text-sm font-bold text-[#172033]">{indikator.title}</span>
                              </div>
                              <p className="text-xs text-gray-500 line-clamp-2">{indikator.description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className={\`px-3 py-1 rounded-full text-[11px] font-bold border \${getStatusStyle(indikator.status)}\`}>
                                {indikator.status}
                              </div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(\`/projects/\${projectId}/ded/\${indikator.id}/edit\`);
                                }}
                                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E4E7EC] text-[#172033] rounded-md text-xs font-bold hover:bg-gray-50 transition shadow-sm"
                              >
                                <FiEdit /> Buka Editor
                              </button>
                            </div>
                          </div>
                        ))}
                        {(!dimensi.children || dimensi.children.length === 0) && (
                          <div className="px-8 py-4 text-sm text-gray-400 italic">Belum ada indikator.</div>
                        )}
                      </div>
                    </div>
                  ))}
                  {(!kriteria.children || kriteria.children.length === 0) && (
                    <div className="p-6 text-center text-sm text-gray-400 italic">Belum ada dimensi di kriteria ini.</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        `);

fs.writeFileSync(file, code);
