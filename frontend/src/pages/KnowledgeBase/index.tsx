import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F9FC] overflow-hidden">
				<div className="flex items-center self-stretch">
					<div className="bg-white w-[260px] pt-6 px-4">
						<div className="flex items-center self-stretch mb-5 gap-2.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ld9e53yy_expires_30_days.png"} 
								className="w-9 h-9 rounded-lg object-fill"
							/>
							<div className="flex flex-col shrink-0 items-start gap-0.5">
								<span className="text-[#163A5F] text-base font-bold" >
									DED LAMEMBA
								</span>
								<span className="text-[#667085] text-[10px] font-bold mr-[23px]" >
									AI DOC GENERATOR
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-5 gap-1 rounded-lg border border-solid border-[#E4E7EC]">
							<span className="text-[#667085] text-[9px] font-bold ml-3" >
								AKTIF WORKSPACE
							</span>
							<div className="flex justify-between items-center self-stretch ml-3">
								<span className="text-[#172033] text-xs font-bold" >
									S1 Manajemen 2026
								</span>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/z48g7l9m_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/614d2ne4_expires_30_days.png"} 
									className="w-1.5 h-1.5 object-fill"
								/>
								<span className="text-[#667085] text-[10px]" >
									DEMO Mode
								</span>
							</div>
						</div>
						<div className="flex flex-col self-stretch mb-5 gap-4">
							<div className="flex flex-col items-start self-stretch gap-1">
								<span className="text-[#667085] text-[11px] font-bold" >
									Workspace
								</span>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/fzkgpdav_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm font-bold" >
										Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/n6et2eyl_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/cdizlqqt_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Documents
									</span>
								</div>
								<div className="flex items-center self-stretch bg-[#E8EEF5] rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/975r4qf2_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<input
										placeholder="Knowledge Base"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="flex-1 self-stretch text-[#163A5F] bg-transparent text-sm py-2.5 mr-1 border-0"
									/>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/spcxq2g3_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										DED Overview
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1">
								<span className="text-[#667085] text-[11px] font-bold" >
									Research
								</span>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/mbyx8wuf_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gfgkq63f_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Evaluation Dataset
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/fasdg0bf_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Experiments
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/tcua8fo3_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jfcol09d_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/1qguzqpx_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Method Comparison
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-1">
								<span className="text-[#667085] text-[11px] font-bold" >
									System
								</span>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hu1jfo6l_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6mnalq6c_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Notifications
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/lmbd7wom_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Settings
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch pt-3 mb-[330px] gap-1.5">
							<span className="text-[#667085] text-[11px]" >
								Engine: Hybrid RAG v1.4
							</span>
							<span className="text-[#667085] text-[11px]" >
								LLM: Gemini Pro Academic
							</span>
						</div>
					</div>
					<div className="flex-1">
						<div className="flex justify-between items-center self-stretch bg-white py-4 px-8">
							<div className="flex shrink-0 items-center">
								<span className="text-[#667085] text-sm mr-2.5" >
									Workspace
								</span>
								<span className="text-[#667085] text-sm mr-[9px]" >
									/
								</span>
								<span className="text-[#172033] text-sm font-bold" >
									Knowledge Base
								</span>
							</div>
							<div className="flex items-center w-[481px] gap-5">
								<div className="flex flex-1 items-center bg-[#F7F9FC] rounded-lg border border-solid border-[#E4E7EC]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/sca8ev9q_expires_30_days.png"} 
										className="w-4 h-4 ml-3 mr-2 rounded-lg object-fill"
									/>
									<input
										placeholder="Cari chunk, source..."
										value={input2}
										onChange={(event)=>onChangeInput2(event.target.value)}
										className="flex-1 self-stretch text-[#667085] bg-transparent text-[13px] py-2 mr-1 border-0"
									/>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/khuht1j0_expires_30_days.png"} 
									className="w-[34px] h-[34px] rounded-[20px] object-fill"
								/>
								<div className="flex items-center w-[167px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/c22q623u_expires_30_days.png"} 
										className="w-8 h-8 rounded-2xl object-fill"
									/>
									<div className="flex flex-1 flex-col items-start gap-0.5">
										<span className="text-[#172033] text-[13px] font-bold" >
											Dr. Ir. Hendra DEMO
										</span>
										<div className="flex items-center self-stretch gap-1.5">
											<span className="text-[#667085] text-[11px]" >
												Asesor internal
											</span>
											<div className="flex flex-col shrink-0 items-start bg-[#163A5F] pb-[1px] px-1.5 rounded">
												<span className="text-white text-[9px] font-bold" >
													ADMIN
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col self-stretch p-8 gap-6">
							<div className="flex items-start self-stretch">
								<div className="flex flex-1 flex-col items-start gap-1.5">
									<span className="text-[#172033] text-[28px] font-bold" >
										Knowledge Base &amp; Vector Store
									</span>
									<div className="flex items-center">
										<span className="text-[#163A5F] text-sm font-bold mr-[11px]" >
											Proyek Aktif:
										</span>
										<span className="text-[#172033] text-sm mr-[11px]" >
											Akreditasi S1 Manajemen 2026 · DEMO
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/uc5kzy82_expires_30_days.png"} 
											className="w-1.5 h-1.5 mr-2 object-fill"
										/>
										<span className="text-[#667085] text-[13px]" >
											Last indexing: 5 menit yang lalu
										</span>
									</div>
								</div>
								<div className="flex shrink-0 items-center mt-[21px] gap-3">
									<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/m9aglunt_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											Re-index RRF
										</span>
									</button>
									<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-4 gap-2 rounded-lg border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/fm9u1cf6_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-white text-[13px] font-bold" >
											Tambah Source
										</span>
									</button>
								</div>
							</div>
							<div className="flex flex-col self-stretch bg-blue-50 p-4 gap-2 rounded-xl border border-solid border-[#D0E0FF]">
								<div className="flex items-center self-stretch gap-2">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4232s2qd_expires_30_days.png"} 
										className="w-4 h-4 object-fill"
									/>
									<span className="text-blue-500 text-sm font-bold" >
										Algoritma Reciprocal Rank Fusion (RRF) Aktif
									</span>
								</div>
								<span className="text-[#2E4C7E] text-[13px]" >
									Sistem pencarian bukti (Evidence) secara otomatis menggabungkan skor dari **Semantic Retrieval** (vector search) dan **BM25** (keyword search) melalui fusi peringkat timbal balik (RRF) demi menjamin keterlacakan dokumen DED &amp; DKPS kriteria LAMEMBA secara tepat.
								</span>
							</div>
							<div className="flex items-center self-stretch gap-4">
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-[11px] font-bold" >
											Total Sources
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/q4lgnqoy_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											14 Dokumen
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8ny06tkm_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-emerald-500 text-[11px] font-bold mr-[7px]" >
												+2 Baru
											</span>
											<span className="text-[#667085] text-[11px]" >
												vs minggu lalu (DEMO)
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-[11px] font-bold" >
											Total Chunks
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/a0mgejxa_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											1,842 Chunks
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/udc3svdf_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-emerald-500 text-[11px] font-bold mr-[7px]" >
												+142 Baru
											</span>
											<span className="text-[#667085] text-[11px]" >
												vs minggu lalu (DEMO)
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-[11px] font-bold" >
											Successfully Indexed
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/80vw545y_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											1,798 Chunks
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/krzz6njl_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-emerald-500 text-[11px] font-bold mr-1.5" >
												97.6% Rate
											</span>
											<span className="text-[#667085] text-[11px]" >
												vs minggu lalu (DEMO)
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-[11px] font-bold" >
											Failed Chunks
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4o3e8xn6_expires_30_days.png"} 
											className="w-7 h-7 rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											44 Chunks
										</span>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ujot6gyx_expires_30_days.png"} 
												className="w-3 h-3 mr-1 object-fill"
											/>
											<span className="text-red-500 text-[11px] font-bold mr-1.5" >
												-5 Berhasil
											</span>
											<span className="text-[#667085] text-[11px]" >
												vs minggu lalu (DEMO)
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-start self-stretch gap-6">
								<div className="flex flex-1 flex-col gap-6">
									<div className="flex flex-col items-start self-stretch bg-white py-[18px] pr-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
										<span className="text-[#172033] text-sm font-bold ml-[18px]" >
											Filter Pencarian Chunks (RRF Store)
										</span>
										<div className="flex items-center self-stretch ml-[18px] gap-3">
											<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-[13px] rounded-md border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px]" >
													Project: S1 Manajemen 2026
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/tn5a1xvb_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-md object-fill"
												/>
											</button>
											<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 rounded-md border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px] mr-[76px]" >
													Document: Semua
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/vorcmq46_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-md object-fill"
												/>
											</button>
											<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-[42px] rounded-md border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px]" >
													Kriteria: 1 - 7 LAMEMBA
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8ub9mevc_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-md object-fill"
												/>
											</button>
										</div>
										<div className="flex items-center self-stretch ml-[18px] gap-3">
											<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 rounded-md border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px] mr-[169px]" >
													Dimensi: Semua
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/iy2y2b8j_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-md object-fill"
												/>
											</button>
											<div className="flex shrink-0 items-center bg-[#F7F9FC] py-2 px-3 gap-2 rounded-md border border-solid border-[#E4E7EC]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8s5ic72p_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-md object-fill"
												/>
												<span className="text-[#667085] text-[13px]" >
													Cari ID chunk atau kutipan...
												</span>
											</div>
											<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-2 px-4 rounded-md border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px] font-bold" >
													Reset
												</span>
											</button>
										</div>
									</div>
									<div className="self-stretch bg-white rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex items-start self-stretch bg-[#F7F9FC] py-2.5">
											<span className="text-[#667085] text-[11px] font-bold w-[52px] ml-4 mr-[18px]" >
												SOURCE / BUKTI
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[53px]" >
												HLM
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[42px]" >
												KRITERIA / DIMENSI
											</span>
											<span className="text-[#667085] text-[11px] font-bold" >
												CHUNK ID
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#667085] text-[11px] font-bold mr-[42px]" >
												SEMANTIC
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[35px]" >
												BM25
											</span>
											<span className="text-[#667085] text-[11px] font-bold" >
												STATUS
											</span>
											<div className="flex-1 self-stretch">
											</div>
										</div>
										<div className="flex items-center self-stretch bg-white py-3 px-4">
											<div className="flex flex-col shrink-0 items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px] font-bold" >
													Renstra_UPPS_2025.pdf
												</span>
												<span className="text-[#667085] text-[11px] w-[33px] mr-[21px]" >
													UPPS · DEMO
												</span>
											</div>
											<span className="text-[#172033] text-[13px] mr-[33px]" >
												Hlm. 14
											</span>
											<div className="flex flex-1 flex-col items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px]" >
													1. Orientasi Strategis
												</span>
												<span className="text-[#667085] text-[11px]" >
													Visi &amp; Misi
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-[45px]" >
												chunk_kb_082
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/lhooreu1_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ni6rfn0r_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<div className="flex flex-1 flex-col items-start">
												<div className="flex flex-col items-start bg-emerald-50 py-[3px] px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														✓ Indexed
													</span>
												</div>
											</div>
										</div>
										<div className="flex items-center self-stretch bg-white py-3 px-4">
											<div className="flex flex-col shrink-0 items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px] font-bold" >
													DKPS_Akademik_V2.xlsx
												</span>
												<span className="text-[#667085] text-[11px] w-[33px] mr-[21px]" >
													UPPS · DEMO
												</span>
											</div>
											<span className="text-[#172033] text-[13px] w-[37px] mr-[39px]" >
												Sheet Dosen
											</span>
											<div className="flex flex-1 flex-col items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px]" >
													4. Dosen &amp; Tendik
												</span>
												<span className="text-[#667085] text-[11px]" >
													Kualifikasi Dosen
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-[50px]" >
												chunk_kb_119
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/m7wzt97c_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/78guqwb0_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<div className="flex flex-1 flex-col items-start">
												<div className="flex flex-col items-start bg-emerald-50 py-[3px] px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														✓ Indexed
													</span>
												</div>
											</div>
										</div>
										<div className="flex items-center self-stretch bg-[#E8EEF5] py-3 px-4">
											<div className="flex flex-col shrink-0 items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px] font-bold" >
													Kebijakan_SPMI_FE_2024.pdf
												</span>
												<span className="text-[#667085] text-[11px] w-[33px] mr-[21px]" >
													UPPS · DEMO
												</span>
											</div>
											<span className="text-[#172033] text-[13px] mr-[39px]" >
												Hlm. 8
											</span>
											<div className="flex flex-1 flex-col items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px]" >
													2. Tata Kelola
												</span>
												<span className="text-[#667085] text-[11px]" >
													Penjaminan Mutu
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-12" >
												chunk_kb_201
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/evmebikp_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5ahxbqxm_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<div className="flex flex-1 flex-col items-center bg-amber-100 py-[3px] rounded-md">
												<span className="text-[#F59E0B] text-[11px] font-bold" >
													⚠ Needs Review
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch bg-white py-3 px-4">
											<div className="flex flex-col shrink-0 items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px] font-bold" >
													Kurikulum_OBE_Manajemen.pdf
												</span>
												<span className="text-[#667085] text-[11px] w-[33px] mr-[21px]" >
													UPPS · DEMO
												</span>
											</div>
											<span className="text-[#172033] text-[13px] mr-[31px]" >
												Hlm. 42
											</span>
											<div className="flex flex-1 flex-col items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px]" >
													6. Pendidikan
												</span>
												<span className="text-[#667085] text-[11px]" >
													Kurikulum OBE
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-[47px]" >
												chunk_kb_314
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ileqpyuj_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2ym1b5cn_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<div className="flex flex-1 flex-col items-start">
												<div className="flex flex-col items-start bg-red-50 py-[3px] px-2 rounded-md">
													<span className="text-red-500 text-[11px] font-bold" >
														✕ Failed
													</span>
												</div>
											</div>
										</div>
										<div className="flex items-center self-stretch bg-white py-3 px-4">
											<div className="flex flex-col shrink-0 items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px] font-bold" >
													Laporan_Penelitian_2025.pdf
												</span>
												<span className="text-[#667085] text-[11px] w-[33px] mr-[21px]" >
													UPPS · DEMO
												</span>
											</div>
											<span className="text-[#172033] text-[13px] mr-[39px]" >
												Hlm. 5
											</span>
											<div className="flex flex-1 flex-col items-start mr-4 gap-0.5">
												<span className="text-[#172033] text-[13px]" >
													7. Pengabdian
												</span>
												<span className="text-[#667085] text-[11px]" >
													Luaran Penelitian
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-[45px]" >
												chunk_kb_402
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/uauingyd_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/pdrqqh11_expires_30_days.png"} 
												className="w-[70px] h-3.5 mr-4 object-fill"
											/>
											<div className="flex flex-1 flex-col items-start">
												<div className="flex flex-col items-start bg-emerald-50 py-[3px] px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														✓ Indexed
													</span>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center self-stretch p-4">
											<span className="text-[#667085] text-[13px]" >
												Menampilkan 1-5 dari 1,842 chunks (DEMO)
											</span>
											<div className="flex shrink-0 items-center gap-2">
												<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-[13px]" >
														Sebelumnya
													</span>
												</button>
												<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-[13px]" >
														Berikutnya
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-center bg-white w-[360px] py-5 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch mb-5 mx-5">
										<div className="flex flex-col shrink-0 items-start gap-1">
											<span className="text-[#163A5F] text-[11px] font-bold" >
												CHUNK DETAIL &amp; EVIDENCE
											</span>
											<span className="text-[#172033] text-base font-bold mr-[41px]" >
												chunk_kb_201
											</span>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/akq53bzz_expires_30_days.png"} 
											className="w-[18px] h-[18px] object-fill"
										/>
									</div>
									<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[19px] mx-5">
									</div>
									<div className="flex flex-col items-start self-stretch mb-5 mx-5 gap-2">
										<span className="text-[#667085] text-xs font-bold" >
											RELEVANT EXCERPT (KUTIPAN BUKTI)
										</span>
										<div className="flex flex-col self-stretch bg-[#F7F9FC] p-3 rounded-lg border border-solid border-[#E4E7EC]">
											<span className="text-[#172033] text-[13px]" >
												&quot;...Sistem Penjaminan Mutu Internal (SPMI) di Fakultas Ekonomi dikoordinasikan secara berkala setiap akhir semester ganjil untuk mengaudit kesesuaian modul ajar kurikulum OBE dengan standar kelulusan minimal UPPS...&quot;
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch mb-5 mx-5 gap-3">
										<span className="text-[#667085] text-xs font-bold" >
											METADATA SOURCE
										</span>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#667085] text-[11px]" >
												Nama Dokumen
											</span>
											<span className="text-[#172033] text-[13px] font-bold" >
												Kebijakan_SPMI_FE_2024.pdf
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#667085] text-[11px]" >
												Halaman / Lokasi
											</span>
											<span className="text-[#172033] text-[13px]" >
												Halaman 8
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#667085] text-[11px]" >
												Tipe Dokumen
											</span>
											<div className="flex flex-col items-start bg-[#F2F4F7] py-1 px-2 rounded-md">
												<span className="text-[#344054] text-[11px] font-bold" >
													Evidence pendukung
												</span>
											</div>
										</div>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#667085] text-[11px]" >
												Kriteria LAMEMBA
											</span>
											<span className="text-[#172033] text-[13px]" >
												Kriteria 2 (Tata Pamong &amp; Tata Kelola)
											</span>
										</div>
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#667085] text-[11px]" >
												Status Sinkronisasi Store
											</span>
											<div className="flex items-center gap-2">
												<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														Semantic: ✓ OK
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														BM25: ✓ OK
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[19px] mx-5">
									</div>
									<div className="flex flex-col self-stretch mb-5 mx-5 gap-2">
										<button className="flex flex-col items-center self-stretch bg-[#163A5F] text-left py-2.5 rounded-lg border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-[13px] font-bold" >
												Lihat Dokumen Asli
											</span>
										</button>
										<button className="flex flex-col items-center self-stretch bg-transparent text-left py-2.5 rounded-lg border border-solid border-[#163A5F]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#163A5F] text-[13px] font-bold" >
												Inspect RRF Rank
											</span>
										</button>
									</div>
									<button className="flex flex-col items-start bg-amber-100 text-left p-3 rounded-lg border border-solid border-[#FFE0B2]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#7A4F01] text-[11px] w-[296px]" >
											* Kutipan membantu keterlacakan bukti fisik (Evidence) di lapangan, namun tidak otomatis membuktikan kebenaran absolut isi klaim akreditasi.
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}