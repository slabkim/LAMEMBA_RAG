import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F9FC] overflow-hidden">
				<div className="flex items-center self-stretch">
					<div className="bg-white w-[260px] pt-6 px-4">
						<div className="flex items-center self-stretch mb-5 gap-2.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/y4ap481x_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gf5j4ef6_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/0i0rll95_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xz0ij1n3_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm font-bold" >
										Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9p65s1f9_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/kada9cli_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Documents
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/46bjsqv5_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Knowledge Base
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/kl4tadi6_expires_30_days.png"} 
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
								<div className="flex items-center self-stretch bg-[#E8EEF5] py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/e34i2jiu_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#163A5F] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/63xk8oqx_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Evaluation Dataset
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/668n36yb_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Experiments
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9w78a07p_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/f8ytr2fi_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/frn7prbd_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/tqfquq5k_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/z420wi58_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Notifications
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/95qtkfna_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Settings
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch pt-3 mb-[900px] gap-1.5">
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
									Research Dashboard
								</span>
							</div>
							<div className="flex shrink-0 items-center gap-5">
								<div className="flex shrink-0 items-center bg-[#F7F9FC] py-2 px-3 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gimyav20_expires_30_days.png"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-[#667085] text-[13px]" >
										Cari eksperimen, dataset...
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xajgxsfk_expires_30_days.png"} 
									className="w-[34px] h-[34px] rounded-[20px] object-fill"
								/>
								<div className="flex items-center w-[167px] gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/0gm4y8s4_expires_30_days.png"} 
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
									<div className="flex items-center gap-[17px]">
										<span className="text-[#172033] text-[28px] font-bold" >
											Research Dashboard
										</span>
										<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-[3px] px-3 rounded-md">
											<span className="text-white text-[11px] font-bold" >
												RESEARCH PROTOTYPE
											</span>
										</div>
									</div>
									<span className="text-[#667085] text-sm" >
										Pusat evaluasi metode AI, dataset DKPS, RAG parameter, dan metrik akurasi generasi dokumen LAMEMBA.
									</span>
									<div className="flex items-center">
										<span className="text-[#163A5F] text-[13px] font-bold mr-[11px]" >
											Proyek Aktif:
										</span>
										<span className="text-[#172033] text-[13px] mr-2.5" >
											Akreditasi S1 Manajemen 2026 · DEMO
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4qsrcke4_expires_30_days.png"} 
											className="w-1.5 h-1.5 mr-2 object-fill"
										/>
										<span className="text-[#667085] text-[13px]" >
											Sinkronisasi terakhir: 5 menit yang lalu
										</span>
									</div>
								</div>
								<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 mt-[43px] gap-2 rounded-lg border border-solid border-[#E4E7EC]"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/nhzgnqwb_expires_30_days.png"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-[13px] font-bold" >
										Lihat Experiments
									</span>
								</button>
							</div>
							<div className="flex items-center self-stretch bg-amber-100 px-3 rounded-lg border border-solid border-[#F59E0B]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/t2k665ge_expires_30_days.png"} 
									className="w-4 h-4 mr-2 rounded-lg object-fill"
								/>
								<input
									placeholder="Catatan Penting: Semua angka metrik dan hasil eksperimen yang ditampilkan di halaman demo ini hanya ditujukan untuk tujuan visualisasi antarmuka dan bukan merupakan hasil penelitian ilmiah aktual."
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									className="flex-1 self-stretch text-[#172033] bg-transparent text-xs py-3 mr-1 border-0"
								/>
							</div>
							<div className="flex items-center self-stretch gap-3">
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-xs font-bold" >
											Evaluation Dataset
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/t262t0xo_expires_30_days.png"} 
											className="w-[30px] h-[30px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-xl font-bold" >
											S1_Mgt_Eval_v1.json
										</span>
										<div className="flex items-center self-stretch">
											<span className="text-emerald-500 text-[11px] font-bold mr-1.5" >
												120 Entries
											</span>
											<span className="text-[#667085] text-[11px] mr-[7px]" >
												·
											</span>
											<span className="text-[#667085] text-[11px]" >
												Status: Ready
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-xs font-bold" >
											Test Cases
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/r513llwd_expires_30_days.png"} 
											className="w-[30px] h-[30px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											120 Cases
										</span>
										<div className="flex items-center self-stretch gap-[7px]">
											<span className="text-blue-500 text-[11px] font-bold" >
												7 Kriteria
											</span>
											<span className="text-[#667085] text-[11px]" >
												·
											</span>
											<span className="text-[#667085] text-[11px]" >
												Fully mapped
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-xs font-bold" >
											Methods Available
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/sbssi7uu_expires_30_days.png"} 
											className="w-[30px] h-[30px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#172033] text-2xl font-bold" >
											3 Metode
										</span>
										<div className="flex items-center self-stretch">
											<span className="text-blue-500 text-[11px] font-bold mr-1.5" >
												Active: Hybrid RAG
											</span>
											<span className="text-[#667085] text-[11px] mr-[7px]" >
												·
											</span>
											<span className="text-[#667085] text-[11px]" >
												Semantic + BM25
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
									<div className="flex justify-between items-center self-stretch">
										<span className="text-[#667085] text-xs font-bold" >
											Latest Evaluation Run
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/yx3f0p6o_expires_30_days.png"} 
											className="w-[30px] h-[30px] rounded-lg object-fill"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch gap-1">
										<span className="text-[#667085] text-lg font-bold" >
											Belum ada run selesai
										</span>
										<div className="flex items-center self-stretch gap-1">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gd4qk9hi_expires_30_days.png"} 
												className="w-3 h-3 object-fill"
											/>
											<span className="text-[#F59E0B] text-[11px]" >
												No experiment results yet.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex items-start self-stretch gap-6">
								<div className="flex flex-1 flex-col gap-6">
									<div className="self-stretch bg-white rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex justify-between items-center self-stretch p-5">
											<div className="flex flex-col shrink-0 items-start gap-1">
												<span className="text-[#172033] text-base font-bold mr-[102px]" >
													Metode AI Document Generator yang Tersedia
												</span>
												<span className="text-[#667085] text-[13px]" >
													Perbandingan deskriptif tiga pendekatan pemrosesan draft DED LAMEMBA
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-1 px-2 rounded-md">
												<span className="text-emerald-500 text-[11px] font-bold" >
													Gemini Pro Ready
												</span>
											</div>
										</div>
										<div className="flex items-start self-stretch py-4 px-5 gap-4">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/cqejrp5a_expires_30_days.png"} 
												className="w-[38px] h-[38px] rounded-lg object-fill"
											/>
											<div className="flex flex-1 flex-col items-start gap-1">
												<div className="flex justify-between items-center self-stretch">
													<span className="text-[#172033] text-sm font-bold" >
														1. LLM Only (Tanpa Context / Zero-shot)
													</span>
													<div className="flex flex-col shrink-0 items-start bg-red-50 py-[1px] px-2 rounded">
														<span className="text-red-500 text-[10px] font-bold" >
															Not Recommended
														</span>
													</div>
												</div>
												<span className="text-[#667085] text-[13px] w-[617px]" >
													Mengandalkan sepenuhnya pada pre-trained knowledge LLM Gemini tanpa menginjeksikan dokumen eksternal. Berisiko tinggi mengalami halusinasi data dan format LAMEMBA yang tidak akurat.
												</span>
												<div className="flex items-center py-1 gap-[18px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Model: Gemini Pro Academic
													</span>
													<span className="text-[#667085] text-[11px] font-bold" >
														Context Window: 32k tokens
													</span>
												</div>
											</div>
										</div>
										<div className="flex items-start self-stretch py-4 px-5 gap-4">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ryqkmtsn_expires_30_days.png"} 
												className="w-[38px] h-[38px] rounded-lg object-fill"
											/>
											<div className="flex flex-1 flex-col items-start gap-1">
												<div className="flex justify-between items-center self-stretch">
													<span className="text-[#172033] text-sm font-bold" >
														2. Semantic RAG (Vector Search Only)
													</span>
													<div className="flex flex-col shrink-0 items-start bg-blue-50 py-[1px] px-2 rounded">
														<span className="text-blue-500 text-[10px] font-bold" >
															Baseline
														</span>
													</div>
												</div>
												<span className="text-[#667085] text-[13px]" >
													Melakukan penelusuran dokumen pendukung akreditasi (Evidence) menggunakan pencarian kemiripan vektor (Cosine Similarity). Sangat baik untuk memahami konteks semantik naskah, tetapi sering melewatkan kecocokan keyword spesifik (seperti kode program studi atau angka DKPS).
												</span>
												<div className="flex items-center py-1 gap-[18px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Model: Gemini Pro Academic
													</span>
													<span className="text-[#667085] text-[11px] font-bold" >
														Vector DB: ChromaDB
													</span>
												</div>
											</div>
										</div>
										<div className="flex items-start self-stretch py-4 px-5 gap-4">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/rcr9goyc_expires_30_days.png"} 
												className="w-[38px] h-[38px] rounded-lg object-fill"
											/>
											<div className="flex flex-1 flex-col items-start gap-1">
												<div className="flex justify-between items-center self-stretch">
													<span className="text-[#163A5F] text-sm font-bold" >
														3. Hybrid RAG (Semantic Retrieval + BM25 + RRF)
													</span>
													<div className="flex flex-col shrink-0 items-start bg-emerald-50 py-[1px] px-2 rounded">
														<span className="text-emerald-500 text-[10px] font-bold" >
															Active / Default
														</span>
													</div>
												</div>
												<span className="text-[#667085] text-[13px]" >
													Menggabungkan akurasi pencarian semantik (Vector Search) dengan presisi pencarian kata kunci tradisional (BM25). Hasilnya diredistribusikan menggunakan teknik Reciprocal Rank Fusion (RRF) untuk memastikan bukti kuantitatif DKPS dan konteks kualitatif DED tersaji optimal kepada LLM.
												</span>
												<div className="flex items-center py-1 gap-[18px]">
													<span className="text-[#667085] text-[11px] font-bold" >
														Model: Gemini Pro Academic
													</span>
													<span className="text-[#667085] text-[11px] font-bold" >
														RRF Constant: k = 60
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col self-stretch bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex justify-between items-center self-stretch">
											<div className="flex flex-col shrink-0 items-start gap-1">
												<span className="text-[#172033] text-base font-bold mr-[146px]" >
													Metrik RAGAS (RAG Assessment Series)
												</span>
												<span className="text-[#667085] text-[13px]" >
													Kerangka kerja standardisasi evaluasi otomatis untuk performa sistem RAG
												</span>
											</div>
											<button className="flex flex-col shrink-0 items-start bg-[#F7F9FC] text-left py-[5px] px-3 rounded-lg border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#163A5F] text-[13px] font-bold" >
													Buka RAGAS Evaluation
												</span>
											</button>
										</div>
										<div className="flex items-center self-stretch gap-3">
											<div className="flex flex-1 flex-col items-start bg-[#F7F9FC] py-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<span className="text-[#667085] text-xs font-bold ml-4" >
													Faithfulness
												</span>
												<span className="text-[#667085] text-[28px] font-bold ml-4" >
													—
												</span>
												<span className="text-[#667085] text-[11px] ml-4" >
													Not available
												</span>
											</div>
											<div className="flex flex-1 flex-col items-start bg-[#F7F9FC] py-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<span className="text-[#667085] text-xs font-bold ml-4" >
													Answer Relevancy
												</span>
												<span className="text-[#667085] text-[28px] font-bold ml-4" >
													—
												</span>
												<span className="text-[#667085] text-[11px] ml-4" >
													Not available
												</span>
											</div>
											<div className="flex flex-1 flex-col items-start bg-[#F7F9FC] py-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<span className="text-[#667085] text-xs font-bold ml-4" >
													Context Precision
												</span>
												<span className="text-[#667085] text-[28px] font-bold ml-4" >
													—
												</span>
												<span className="text-[#667085] text-[11px] ml-4" >
													Not available
												</span>
											</div>
											<div className="flex flex-1 flex-col items-start bg-[#F7F9FC] py-4 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<span className="text-[#667085] text-xs font-bold ml-4" >
													Context Recall
												</span>
												<span className="text-[#667085] text-[28px] font-bold ml-4" >
													—
												</span>
												<span className="text-[#667085] text-[11px] ml-4" >
													Not available
												</span>
											</div>
										</div>
										<div className="flex flex-col items-center self-stretch bg-[#F7F9FC] py-6 gap-2.5 rounded-lg border border-solid border-[#E4E7EC]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/o13xj0it_expires_30_days.png"} 
												className="w-6 h-6 rounded-lg object-fill"
											/>
											<div className="flex flex-col items-center self-stretch mx-6 gap-1">
												<span className="text-[#172033] text-sm font-bold" >
													No experiment results yet.
												</span>
												<span className="text-[#667085] text-xs text-center w-[527px]" >
													Metrik performa RAGAS (skor akurasi 0.0 - 1.0) akan otomatis terisi setelah Anda menjalankan \nproses evaluasi otomatis menggunakan dataset kuesioner.
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col w-[332px] gap-6">
									<div className="flex flex-col self-stretch bg-white p-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex flex-col items-start self-stretch gap-1">
											<span className="text-[#172033] text-base font-bold" >
												Dataset Overview
											</span>
											<span className="text-[#667085] text-[13px]" >
												Dataset uji kriteria akreditasi
											</span>
										</div>
										<div className="flex flex-col self-stretch gap-3">
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#667085] text-[11px] font-bold" >
													NAMA DATASET
												</span>
												<span className="text-[#172033] text-[13px] font-bold" >
													S1_Mgt_Eval_Dataset_v1.json
												</span>
											</div>
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#667085] text-[11px] font-bold" >
													TOTAL ENTRIES
												</span>
												<span className="text-[#172033] text-[13px] font-bold" >
													120 Pertanyaan &amp; Kunci Jawaban
												</span>
											</div>
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#667085] text-[11px] font-bold" >
													TERAKHIR DIPERBARUI
												</span>
												<span className="text-[#172033] text-[13px] font-bold" >
													Hari ini, 10:15 WIB
												</span>
											</div>
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#667085] text-[11px] font-bold" >
													CAKUPAN KATEGORI
												</span>
												<span className="text-[#172033] text-[13px] font-bold" >
													7 Kriteria Standar LAMEMBA 2025
												</span>
											</div>
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#667085] text-[11px] font-bold" >
													STATUS READINESS
												</span>
												<div className="flex flex-col items-start bg-emerald-50 py-1 px-2 rounded-md">
													<span className="text-emerald-500 text-[11px] font-bold" >
														Ready for Evaluation Run
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-white py-5 pr-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
										<span className="text-[#172033] text-base font-bold ml-5" >
											Alur Riset &amp; Evaluasi
										</span>
										<div className="flex flex-col self-stretch ml-5 gap-3">
											<div className="flex items-center self-stretch gap-3">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-[9px] rounded-xl">
													<span className="text-white text-xs font-bold" >
														1
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold mr-[82px]" >
														Dataset Setup
													</span>
													<span className="text-[#667085] text-[11px]" >
														Persiapkan dataset uji kualifikasi
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch gap-3">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-2 rounded-xl">
													<span className="text-white text-xs font-bold" >
														2
													</span>
												</div>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Experiments
													</span>
													<span className="text-[#667085] text-[11px]" >
														Konfigurasi metode LLM &amp; parameter RAG
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch gap-3">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-2 rounded-xl">
													<span className="text-white text-xs font-bold" >
														3
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold mr-[67px]" >
														Retrieval Inspection
													</span>
													<span className="text-[#667085] text-[11px]" >
														Inspeksi relevansi chunking dan RRF
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch gap-3">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-[7px] rounded-xl">
													<span className="text-white text-xs font-bold" >
														4
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold mr-24" >
														RAGAS Evaluation
													</span>
													<span className="text-[#667085] text-[11px]" >
														Run pengujian otomatis dengan dataset
													</span>
												</div>
											</div>
											<div className="flex items-center self-stretch gap-3">
												<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-1 px-2 rounded-xl">
													<span className="text-white text-xs font-bold" >
														5
													</span>
												</div>
												<div className="flex flex-1 flex-col items-start gap-0.5">
													<span className="text-[#172033] text-[13px] font-bold" >
														Method Comparison
													</span>
													<span className="text-[#667085] text-[11px]" >
														Bandingkan hasil metode untuk versi produksi
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="self-stretch bg-white rounded-xl border border-solid border-[#E4E7EC]">
								<div className="flex flex-col items-center self-stretch py-5 pl-5 gap-1">
									<span className="text-[#172033] text-base font-bold" >
										Riwayat Percobaan &amp; Status Antrean
									</span>
									<span className="text-[#667085] text-[13px]" >
										Daftar eksekusi evaluasi performa model RAG
									</span>
								</div>
								<div className="flex items-center self-stretch bg-[#F7F9FC] py-2.5 px-4">
									<span className="text-[#667085] text-[11px] font-bold mr-[101px]" >
										RUN ID
									</span>
									<span className="text-[#667085] text-[11px] font-bold" >
										DATASET
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#667085] text-[11px] font-bold mr-[85px]" >
										METODE YANG DIUJI
									</span>
									<span className="text-[#667085] text-[11px] font-bold mr-[114px]" >
										STATUS
									</span>
									<span className="text-[#667085] text-[11px] font-bold mr-[66px]" >
										WAKTU DIMULAI
									</span>
									<span className="text-[#667085] text-[11px] font-bold" >
										WAKTU SELESAI
									</span>
								</div>
								<div className="flex items-center self-stretch py-3">
									<span className="text-[#172033] text-[13px] font-bold ml-4 mr-[49px]" >
										RUN-2026-02
									</span>
									<span className="text-[#172033] text-[13px]" >
										S1_Mgt_Eval_v1.json
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#172033] text-[13px] mr-32" >
										Hybrid RAG
									</span>
									<div className="flex shrink-0 items-center bg-amber-100 py-1 px-2 mr-[43px] gap-1.5 rounded-md">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5h9x68ut_expires_30_days.png"} 
											className="w-3 h-3 rounded-md object-fill"
										/>
										<span className="text-[#F59E0B] text-[11px] font-bold" >
											Queued / Draft
										</span>
									</div>
									<span className="text-[#667085] text-[13px] mr-[45px]" >
										Menunggu pemicu
									</span>
									<span className="text-[#667085] text-[13px]" >
										—
									</span>
									<div className="flex-1 self-stretch">
									</div>
								</div>
								<div className="flex flex-col items-center self-stretch bg-[#F7F9FC] py-8 gap-2.5">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ryhm4m3p_expires_30_days.png"} 
										className="w-6 h-6 object-fill"
									/>
									<div className="flex flex-col items-center gap-1">
										<span className="text-[#172033] text-sm font-bold" >
											No completed experiments yet
										</span>
										<span className="text-[#667085] text-[13px]" >
											Jalankan evaluasi pertama Anda melalui menu Experiments untuk memicu komparasi metrik kualifikasi.
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-5 pr-5 gap-4 rounded-xl border border-solid border-[#E4E7EC]">
								<span className="text-[#172033] text-base font-bold ml-5" >
									Aktivitas Riset &amp; Operasional Terkini
								</span>
								<div className="flex flex-col self-stretch ml-5 gap-4">
									<div className="flex items-start self-stretch gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/o4w5l2hm_expires_30_days.png"} 
											className="w-[26px] h-[26px] rounded-[20px] object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-[#172033] text-[13px] font-bold" >
												Dataset Evaluasi Berhasil Diunggah
											</span>
											<span className="text-[#667085] text-[13px]" >
												File S1_Mgt_Eval_Dataset_v1.json berisikan 120 pasang QA berhasil dimuat ke repositori.
											</span>
											<span className="text-[#667085] text-[10px]" >
												10 menit yang lalu · Admin Hendra
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch gap-3">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/3kvcenhp_expires_30_days.png"} 
											className="w-[26px] h-[26px] rounded-[20px] object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-[#172033] text-[13px] font-bold" >
												Konfigurasi Hybrid RAG Diperbarui
											</span>
											<span className="text-[#667085] text-[13px]" >
												Parameter Reciprocal Rank Fusion disesuaikan ke default k = 60 untuk model Gemini.
											</span>
											<span className="text-[#667085] text-[10px]" >
												1 jam yang lalu · System Scheduler
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}