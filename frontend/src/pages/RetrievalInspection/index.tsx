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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4khf894e_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/g5c769ki_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/032bm4y1_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/cch0prwt_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4x71u9r6_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/e9wiyxlb_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Documents
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/h1ndmg9c_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Knowledge Base
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hqrwi6og_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/bbbvohr5_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ya4l6mpw_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Evaluation Dataset
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hx3i3w06_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Experiments
									</span>
								</div>
								<div className="flex items-center self-stretch bg-[#E8EEF5] py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/c5zwuuln_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#163A5F] text-sm font-bold" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/tppxdn0f_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/f0m96lfk_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/blqfqp34_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2a52cz5i_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Notifications
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/msi2lmyi_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Settings
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch pt-3 mb-[907px] gap-1.5">
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
								<span className="text-[#667085] text-sm mr-[11px]" >
									Research
								</span>
								<span className="text-[#667085] text-sm mr-[9px]" >
									/
								</span>
								<span className="text-[#172033] text-sm font-bold" >
									Retrieval Inspection
								</span>
							</div>
							<div className="flex items-center w-[481px] gap-5">
								<div className="flex flex-1 items-center bg-[#F7F9FC] rounded-lg border border-solid border-[#E4E7EC]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/dmykvrzm_expires_30_days.png"} 
										className="w-4 h-4 ml-3 mr-2 rounded-lg object-fill"
									/>
									<input
										placeholder="Cari dokumen audit..."
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="flex-1 self-stretch text-[#667085] bg-transparent text-[13px] py-2 mr-1 border-0"
									/>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4m4gmdfo_expires_30_days.png"} 
									className="w-[34px] h-[34px] rounded-[20px] object-fill"
								/>
								<div className="flex items-center w-[167px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/d8aif7te_expires_30_days.png"} 
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
						<div className="flex items-center self-stretch relative">
							<div className="flex flex-1 flex-col items-center pt-8">
								<div className="flex items-start self-stretch mb-6 mx-8">
									<div className="flex flex-1 flex-col gap-1.5">
										<div className="flex items-center self-stretch gap-4">
											<span className="text-[#172033] text-[28px] font-bold" >
												Retrieval Inspection
											</span>
											<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-[3px] px-3 rounded-md">
												<span className="text-white text-[11px] font-bold" >
													RESEARCH PROTOTYPE
												</span>
											</div>
										</div>
										<span className="text-[#667085] text-sm" >
											Lakukan penelusuran audit terhadap sumber rujukan instrumen akreditasi LAMEMBA menggunakan model Hybrid RAG (Semantic &amp; BM25) secara transparan.
										</span>
									</div>
									<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-4 mt-11 gap-2 rounded-lg border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2926bjec_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-white text-[13px] font-bold" >
											Run Inspection
										</span>
									</button>
								</div>
								<button className="flex items-start bg-amber-100 text-left p-3 mb-6 gap-2 rounded-lg border border-solid border-[#F59E0B]"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ah7f8u2s_expires_30_days.png"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-[13px] w-[688px]" >
										Catatan Penting: Halaman ini berisi simulasi audit retrieval (mock DEMO) untuk visualisasi perbandingan algoritma penelusuran RAG, bukan representasi nilai akurasi tervalidasi di dunia nyata.
									</span>
								</button>
								<div className="flex flex-col items-start self-stretch bg-white py-5 pr-5 mb-6 mx-8 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
									<span className="text-[#172033] text-base font-bold ml-5" >
										Query &amp; Retrieval Configuration
									</span>
									<div className="flex items-center self-stretch ml-5 gap-4">
										<div className="flex flex-col items-start w-[272px] gap-1.5">
											<span className="text-[#667085] text-[11px] font-bold" >
												TEST CASE ID
											</span>
											<div className="flex justify-between items-center self-stretch bg-[#F7F9FC] py-2 px-3 rounded-lg border border-solid border-[#E4E7EC]">
												<span className="text-[#172033] text-[13px] font-bold" >
													TC-011 (Visi Keilmuan)
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gyrhodom_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-lg object-fill"
												/>
											</div>
										</div>
										<div className="flex flex-col items-start w-[272px] gap-1.5">
											<span className="text-[#667085] text-[11px] font-bold" >
												KRITERIA (STANDAR LAMEMBA)
											</span>
											<div className="flex justify-between items-center self-stretch bg-[#F7F9FC] py-2 px-3 rounded-lg border border-solid border-[#E4E7EC]">
												<span className="text-[#172033] text-[13px]" >
													Kriteria 1 - Orientasi Strategis
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/7ho48fux_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-lg object-fill"
												/>
											</div>
										</div>
										<div className="flex flex-col items-start w-[120px] gap-1.5">
											<span className="text-[#667085] text-[11px] font-bold" >
												TOP-K CHUNKS
											</span>
											<button className="flex items-center self-stretch bg-[#F7F9FC] text-left py-2 px-3 gap-6 rounded-lg border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px] font-bold" >
													5 Chunks
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/j293lk7f_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-lg object-fill"
												/>
											</button>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch ml-5 gap-1.5">
										<span className="text-[#667085] text-[11px] font-bold" >
											PERTANYAAN EVALUATIF (USER PROMPT)
										</span>
										<input
											placeholder="Bagaimana UPPS merumuskan visi keilmuan PS Manajemen sesuai dengan perkembangan ilmu?"
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="self-stretch text-[#172033] bg-[#F7F9FC] text-sm p-3 rounded-lg border border-solid border-[#E4E7EC]"
										/>
									</div>
								</div>
								<div className="flex items-center self-stretch bg-white p-4 mb-6 mx-8 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex shrink-0 items-center mr-[9px] gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/mobla8ek_expires_30_days.png"} 
											className="w-6 h-6 object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											Query
										</span>
									</div>
									<span className="text-[#667085] text-[13px] mr-[13px]" >
										→
									</span>
									<div className="flex flex-1 items-center mr-[9px] gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/t26uxv97_expires_30_days.png"} 
											className="w-6 h-6 object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											Semantic Retrieval
										</span>
									</div>
									<span className="text-[#667085] text-[13px] mr-[13px]" >
										→
									</span>
									<div className="flex flex-1 items-center mr-[9px] gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/falcsto6_expires_30_days.png"} 
											className="w-6 h-6 object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											BM25 Keyword
										</span>
									</div>
									<span className="text-[#667085] text-[13px] mr-[13px]" >
										→
									</span>
									<div className="flex shrink-0 items-center mr-[9px] gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/diz0i2nb_expires_30_days.png"} 
											className="w-6 h-6 object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											RRF Fusion
										</span>
									</div>
									<span className="text-[#667085] text-[13px] mr-[13px]" >
										→
									</span>
									<div className="flex flex-1 items-center gap-2">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/kwd01hle_expires_30_days.png"} 
											className="w-6 h-6 object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											Gemini Context
										</span>
									</div>
								</div>
								<div className="flex items-center self-stretch mb-6 mx-8 gap-3">
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-2 px-4 rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#667085] text-[13px]" >
											Semantic Results (5)
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-white text-left py-2 px-4 rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#667085] text-[13px]" >
											BM25 Results (5)
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-[#163A5F] text-left py-2 px-4 rounded-lg border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-[13px] font-bold" >
											RRF Combined Results (5 Active)
										</span>
									</button>
								</div>
								<div className="flex flex-col items-start self-stretch relative mb-6 mx-8">
									<div className="flex flex-col self-stretch gap-3">
										<div className="flex flex-col self-stretch bg-white p-4 gap-3 rounded-xl border border-solid border-[#163A5F]">
											<div className="flex items-center self-stretch">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-2 mr-2.5 rounded-md">
													<span className="text-white text-[11px] font-bold" >
														RANK 1 (RRF)
													</span>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-3" >
													Renstra_UPPS_Manajemen_2025.pdf
												</span>
												<span className="text-[#667085] text-xs" >
													Halaman 4 · Paragraf 2
												</span>
											</div>
											<span className="text-[#172033] text-[13px]" >
												&quot;...Penyusunan visi keilmuan melibatkan dewan penasihat kurikulum nasional dan dirumuskan dalam SK Dekan No. 120/SK/2025 secara integratif dengan mempertimbangkan perkembangan teori bisnis global dan kecerdasan buatan...&quot;
											</span>
											<div className="flex justify-between items-center self-stretch">
												<div className="flex shrink-0 items-center gap-[15px]">
													<span className="text-[#667085] text-[11px]" >
														Source Chunk: CHUNK-08412
													</span>
													<span className="text-[#667085] text-[11px]" >
														Asal Peringkat: Semantic (1) + BM25 (3)
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<div className="flex flex-col shrink-0 items-start py-1 px-2.5 rounded-md border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px] font-bold" >
															View Source
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-3 rounded-md">
														<span className="text-emerald-500 text-[11px] font-bold" >
															✓ Active in Context
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-col self-stretch bg-white p-4 gap-3 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex items-center self-stretch">
												<div className="flex flex-col shrink-0 items-start bg-[#F7F9FC] py-1 px-2 mr-2.5 rounded-md border border-solid border-[#E4E7EC]">
													<span className="text-[#667085] text-[11px] font-bold" >
														RANK 2 (RRF)
													</span>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-3" >
													SK_Penetapan_VMTS_Univesitas.pdf
												</span>
												<span className="text-[#667085] text-xs" >
													Halaman 12 · Lampiran 1
												</span>
											</div>
											<span className="text-[#172033] text-[13px]" >
												&quot;...Visi keilmuan Program Studi Manajemen Fakultas Ekonomi dan Bisnis diarahkan untuk mencetak lulusan dengan keahlian strategis serta berintegritas tinggi melalui kurikulum berbasis riset terapan...&quot;
											</span>
											<div className="flex justify-between items-center self-stretch">
												<div className="flex shrink-0 items-center gap-3.5">
													<span className="text-[#667085] text-[11px]" >
														Source Chunk: CHUNK-01129
													</span>
													<span className="text-[#667085] text-[11px]" >
														Asal Peringkat: Semantic (2) + BM25 (1)
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<div className="flex flex-col shrink-0 items-start py-1 px-2.5 rounded-md border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px] font-bold" >
															View Source
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-3 rounded-md">
														<span className="text-emerald-500 text-[11px] font-bold" >
															✓ Active in Context
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-col self-stretch bg-white p-4 gap-3 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex items-center self-stretch">
												<div className="flex flex-col shrink-0 items-start bg-[#F7F9FC] py-1 px-2 mr-2.5 rounded-md border border-solid border-[#E4E7EC]">
													<span className="text-[#667085] text-[11px] font-bold" >
														RANK 3 (RRF)
													</span>
												</div>
												<span className="text-[#172033] text-[13px] font-bold mr-3" >
													Workshop_Stakeholder_Curriculum.pdf
												</span>
												<span className="text-[#667085] text-xs" >
													Halaman 2 · Paragraf 4
												</span>
											</div>
											<span className="text-[#172033] text-[13px]" >
												&quot;...Perwakilan dewan penasihat industri menyarankan integrasi metodologi pemrosesan data otomatis ke dalam visi keilmuan agar selaras dengan tuntutan dunia kerja penjaminan mutu...&quot;
											</span>
											<div className="flex justify-between items-center self-stretch">
												<div className="flex shrink-0 items-center gap-3.5">
													<span className="text-[#667085] text-[11px]" >
														Source Chunk: CHUNK-03102
													</span>
													<span className="text-[#667085] text-[11px]" >
														Asal Peringkat: Semantic (5) + BM25 (2)
													</span>
												</div>
												<div className="flex shrink-0 items-center gap-2">
													<div className="flex flex-col shrink-0 items-start py-1 px-2.5 rounded-md border border-solid border-[#E4E7EC]">
														<span className="text-[#172033] text-[11px] font-bold" >
															View Source
														</span>
													</div>
													<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-3 rounded-md">
														<span className="text-emerald-500 text-[11px] font-bold" >
															✓ Active in Context
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center absolute top-4 right-[-23px]">
										<div className="flex items-center gap-2">
											<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-3 rounded-md">
												<span className="text-emerald-500 text-[11px] font-bold" >
													DEMO Score: 0.985
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-3 rounded-md">
												<span className="text-white text-[11px] font-bold" >
													1. Orientasi Strategis
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center absolute top-[186px] right-[-31px]">
										<div className="flex items-center gap-2">
											<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-3 rounded-md">
												<span className="text-emerald-500 text-[11px] font-bold" >
													DEMO Score: 0.941
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-3 rounded-md">
												<span className="text-white text-[11px] font-bold" >
													1. Orientasi Strategis
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col self-stretch bg-white p-5 mb-6 mx-8 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex items-center self-stretch">
										<div className="flex flex-col shrink-0 items-start gap-1">
											<span className="text-[#172033] text-base font-bold mr-[146px]" >
												Context Assembly Preview
											</span>
											<span className="text-[#667085] text-[13px]" >
												Kompilasi paket naskah bukti yang disiapkan untuk input jendela konteks LLM Gemini
											</span>
										</div>
										<div className="flex shrink-0 items-center gap-2">
											<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-3 rounded-md">
												<span className="text-white text-[11px] font-bold" >
													3 Active Chunks
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-[#F7F9FC] py-1 px-3 rounded-md">
												<span className="text-[#667085] text-[11px] font-bold" >
													DEMO Token Estimate: ~420 Tokens
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col self-stretch gap-2">
										<div className="flex items-center self-stretch bg-[#F7F9FC] p-2.5 rounded-lg">
											<span className="text-[#163A5F] text-xs font-bold mr-[15px]" >
												[1]
											</span>
											<span className="text-[#172033] text-[13px]" >
												CHUNK-08412 — Renstra_UPPS_Manajemen_2025.pdf (SK Dekan No. 120/SK/2025...)
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#667085] text-[11px]" >
												~140 token
											</span>
										</div>
										<div className="flex items-center self-stretch bg-[#F7F9FC] p-2.5 rounded-lg">
											<span className="text-[#163A5F] text-xs font-bold mr-4" >
												[2]
											</span>
											<span className="text-[#172033] text-[13px]" >
												CHUNK-01129 — SK_Penetapan_VMTS_Univesitas.pdf (Visi keilmuan Program Studi...)
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#667085] text-[11px]" >
												~160 token
											</span>
										</div>
										<div className="flex items-center self-stretch bg-[#F7F9FC] p-2.5 rounded-lg">
											<span className="text-[#163A5F] text-xs font-bold mr-[15px]" >
												[3]
											</span>
											<span className="text-[#172033] text-[13px]" >
												CHUNK-03102 — Workshop_Stakeholder_Curriculum.pdf (integrasi metodologi...)
											</span>
											<div className="flex-1 self-stretch">
											</div>
											<span className="text-[#667085] text-[11px]" >
												~120 token
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1.5">
										<span className="text-[#667085] text-[11px] font-bold" >
											EVALUATOR ASSEMBLY NOTE
										</span>
										<span className="text-[#172033] text-[13px] w-[678px]" >
											&quot;Ketiga dokumen rujukan memenuhi syarat relevansi prima terhadap Standar 1 LAMEMBA tentang visi keilmuan strategis UPPS.&quot;
										</span>
									</div>
								</div>
								<div className="flex flex-col items-center self-stretch py-5 mb-[261px] mx-8 gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<span className="text-[#667085] text-[13px]" >
										No retrieval results for current filters
									</span>
									<button className="flex flex-col items-start bg-[#F7F9FC] text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#172033] text-xs font-bold" >
											Reset Filters
										</span>
									</button>
								</div>
							</div>
							<div className="flex flex-col shrink-0 items-center absolute bottom-[791px] right-[372px]">
								<div className="flex items-center gap-2">
									<div className="flex flex-col shrink-0 items-start bg-amber-100 py-1 px-3 rounded-md">
										<span className="text-[#F59E0B] text-[11px] font-bold" >
											DEMO Score: 0.887
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-3 rounded-md">
										<span className="text-white text-[11px] font-bold" >
											1. Orientasi Strategis
										</span>
									</div>
								</div>
							</div>
							<div className="bg-white w-[380px] pt-6 px-6" 
								style={{
									boxShadow: "-4px 0px 16px #0000000F"
								}}>
								<div className="flex justify-between items-center self-stretch mb-5">
									<div className="flex shrink-0 items-center gap-[11px]">
										<span className="text-[#172033] text-base font-bold" >
											Chunk Detail
										</span>
										<div className="flex flex-col shrink-0 items-start bg-blue-50 py-[1px] px-1.5 rounded">
											<span className="text-blue-500 text-[10px] font-bold" >
												CHUNK-08412
											</span>
										</div>
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ni7m8pc7_expires_30_days.png"} 
										className="w-4 h-4 object-fill"
									/>
								</div>
								<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[19px]">
								</div>
								<div className="flex flex-col items-start self-stretch mb-5 gap-2">
									<span className="text-[#667085] text-[11px] font-bold" >
										SOURCE METADATA
									</span>
									<div className="flex flex-col self-stretch bg-[#F7F9FC] p-3 gap-2 rounded-lg">
										<div className="flex justify-between items-center self-stretch">
											<span className="text-[#667085] text-[11px]" >
												File:
											</span>
											<span className="text-[#163A5F] text-xs font-bold" >
												Renstra_UPPS_Manajemen_2025.pdf
											</span>
										</div>
										<div className="flex justify-between items-center self-stretch">
											<span className="text-[#667085] text-[11px]" >
												Halaman / Lokasi:
											</span>
											<span className="text-[#172033] text-xs font-bold" >
												Halaman 4 · Paragraf 2
											</span>
										</div>
										<div className="flex justify-between items-center self-stretch">
											<span className="text-[#667085] text-[11px]" >
												Kriteria Mapping:
											</span>
											<span className="text-[#172033] text-xs font-bold" >
												1. Orientasi Strategis
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch mb-5 gap-2">
									<span className="text-[#667085] text-[11px] font-bold" >
										ALGORITHM RANKINGS
									</span>
									<div className="flex items-center self-stretch gap-2">
										<div className="flex flex-col shrink-0 items-start bg-blue-50 py-2 pl-2 pr-7 gap-1 rounded-md">
											<span className="text-blue-500 text-[10px]" >
												Semantic Rank
											</span>
											<span className="text-blue-500 text-base font-bold" >
												#1
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-amber-100 py-2 pl-2 pr-11 gap-1 rounded-md">
											<span className="text-[#F59E0B] text-[10px]" >
												BM25 Rank
											</span>
											<span className="text-[#F59E0B] text-base font-bold" >
												#3
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-2 pl-2 pr-7 gap-1 rounded-md">
											<span className="text-emerald-500 text-[10px]" >
												RRF Combined
											</span>
											<span className="text-emerald-500 text-base font-bold" >
												#1
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch mb-5 gap-2">
									<span className="text-[#667085] text-[11px] font-bold" >
										EXCERPT TEKS LENGKAP
									</span>
									<div className="flex flex-col self-stretch bg-[#F7F9FC] p-3 rounded-lg border border-solid border-[#E4E7EC]">
										<span className="text-[#172033] text-[13px]" >
											&quot;Penyusunan visi keilmuan melibatkan dewan penasihat kurikulum nasional dan dirumuskan dalam SK Dekan No. 120/SK/2025 secara integratif dengan mempertimbangkan perkembangan teori bisnis global dan kecerdasan buatan.&quot;
										</span>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch mb-5 gap-2">
									<span className="text-[#667085] text-[11px] font-bold" >
										MATCHED KEYWORDS
									</span>
									<div className="flex items-center self-stretch gap-2">
										<div className="flex flex-col shrink-0 items-start bg-amber-100 py-1 px-2 rounded-md">
											<span className="text-[#F59E0B] text-[11px] font-bold" >
												visi keilmuan
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-amber-100 py-1 px-2 rounded-md">
											<span className="text-[#F59E0B] text-[11px] font-bold" >
												Manajemen
											</span>
										</div>
										<div className="flex flex-col shrink-0 items-start bg-amber-100 py-1 px-2 rounded-md">
											<span className="text-[#F59E0B] text-[11px] font-bold" >
												UPPS
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col self-stretch bg-amber-100 p-3 mb-5 gap-1 rounded-lg border border-solid border-[#F59E0B]">
									<div className="flex items-center self-stretch gap-1.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2u0u0ucw_expires_30_days.png"} 
											className="w-3.5 h-3.5 object-fill"
										/>
										<span className="text-[#F59E0B] text-[11px] font-bold" >
											Retrieval Relevance Warning
										</span>
									</div>
									<span className="text-[#172033] text-[11px]" >
										Kecocokan semantik tinggi tidak secara otomatis menjamin keabsahan bukti dokumen rujukan secara utuh dalam kriteria akreditasi LAMEMBA yang riil.
									</span>
								</div>
								<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[19px]">
								</div>
								<div className="flex items-center self-stretch mb-[1029px] gap-3">
									<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-[27px] gap-2 rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/vvlsgy2k_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-[#172033] text-[13px] font-bold" >
											Open Source
										</span>
									</button>
									<button className="flex shrink-0 items-center bg-[#163A5F] text-left py-2.5 px-5 gap-2 rounded-lg border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/p7z4bxio_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="text-white text-[13px] font-bold" >
											Add to Context
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