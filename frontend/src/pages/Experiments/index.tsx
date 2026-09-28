import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F9FC] overflow-hidden">
				<div className="flex items-center self-stretch">
					<div className="bg-white w-[260px] pt-6 px-4">
						<div className="flex items-center self-stretch mb-5 gap-2.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4rupgs0s_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/jo44oztb_expires_30_days.png"} 
									className="w-3.5 h-3.5 object-fill"
								/>
							</div>
							<div className="flex items-center ml-3 gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ltcw0e3y_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ohmknsgl_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5hlu5ssy_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Projects
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/zob2f6us_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Documents
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/yipvuf8d_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Knowledge Base
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/4jw3t3sz_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/tzh2dpds_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Research Dashboard
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/0ujig29p_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Evaluation Dataset
									</span>
								</div>
								<div className="flex items-center self-stretch bg-[#E8EEF5] rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hau7o79t_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<input
										placeholder="Experiments"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="flex-1 self-stretch text-[#163A5F] bg-transparent text-sm font-bold py-2.5 mr-1 border-0"
									/>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9oucq8gq_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Retrieval Inspection
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/8h19d5g5_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										RAGAS Evaluation
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/h8qy4igd_expires_30_days.png"} 
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
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/i9mjozv4_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Users &amp; Access
									</span>
								</div>
								<div className="flex items-center self-stretch py-2.5 rounded-lg">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/t6m8xbqh_expires_30_days.png"} 
										className="w-[18px] h-[18px] mx-3 rounded-lg object-fill"
									/>
									<span className="text-[#172033] text-sm" >
										Settings
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start self-stretch pt-3 mb-[399px] gap-1.5">
							<span className="text-[#667085] text-[11px]" >
								Engine: Hybrid RAG v1.4
							</span>
							<span className="text-[#667085] text-[11px]" >
								LLM: Gemini Pro Academic
							</span>
						</div>
					</div>
					<div className="flex-1 items-start relative">
						<div className="self-stretch">
							<div className="flex justify-between items-center self-stretch bg-white py-4 px-8">
								<div className="flex shrink-0 items-center">
									<span className="text-[#667085] text-sm mr-[11px]" >
										Research
									</span>
									<span className="text-[#667085] text-sm mr-[9px]" >
										/
									</span>
									<span className="text-[#172033] text-sm font-bold" >
										Experiments
									</span>
								</div>
								<div className="flex items-center w-[481px] gap-5">
									<div className="flex flex-1 items-center bg-[#F7F9FC] rounded-lg border border-solid border-[#E4E7EC]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/78usk72k_expires_30_days.png"} 
											className="w-4 h-4 ml-3 mr-2 rounded-lg object-fill"
										/>
										<input
											placeholder="Cari eksperimen..."
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="flex-1 self-stretch text-[#667085] bg-transparent text-[13px] py-2 mr-1 border-0"
										/>
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/0fl0thrs_expires_30_days.png"} 
										className="w-[34px] h-[34px] rounded-[20px] object-fill"
									/>
									<div className="flex items-center w-[167px] gap-2.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9z5gxfwb_expires_30_days.png"} 
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
							<div className="flex items-center self-stretch">
								<div className="flex-1 pt-8 px-8">
									<div className="flex flex-col items-start self-stretch mb-6 gap-1.5">
										<div className="flex items-center gap-[15px]">
											<span className="text-[#172033] text-[28px] font-bold" >
												Experiments
											</span>
											<div className="flex flex-col shrink-0 items-start bg-[#163A5F] py-[3px] px-3 rounded-md">
												<span className="text-white text-[11px] font-bold" >
													RESEARCH PROTOTYPE
												</span>
											</div>
										</div>
										<span className="text-[#667085] text-sm w-[716px]" >
											Kelola dan bandingkan pendekatan LLM, Semantic RAG, dan Hybrid RAG dalam melengkapi dokumen borang akreditasi LAMEMBA secara aman dan terukur.
										</span>
										<div className="flex items-center gap-[11px]">
											<span className="text-[#163A5F] text-[13px] font-bold" >
												Project Terpilih:
											</span>
											<span className="text-[#172033] text-[13px]" >
												S1 Manajemen 2026 (Demo Mode)
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch bg-amber-100 p-3 mb-6 gap-2 rounded-lg border border-solid border-[#F59E0B]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/wn39uabt_expires_30_days.png"} 
											className="w-4 h-4 rounded-lg object-fill"
										/>
										<span className="flex-1 text-[#172033] text-[13px]" >
											Catatan Penting: Halaman ini adalah demo visualisasi panel evaluasi eksperimen RAG. Semua konfigurasi, performa, dan hasil pengujian bersifat dummy untuk keperluan rancangan antarmuka kualifikasi LAMEMBA.
										</span>
									</div>
									<div className="flex items-start self-stretch mb-6 gap-4">
										<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex justify-between items-center self-stretch">
												<span className="text-[#667085] text-[11px] font-bold" >
													Total Runs
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ex4ecl0l_expires_30_days.png"} 
													className="w-[30px] h-[30px] rounded-lg object-fill"
												/>
											</div>
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#172033] text-2xl font-bold" >
													5 Runs
												</span>
												<span className="text-[#667085] text-[11px] w-[124px]" >
													Konfigurasi tersimpan di database
												</span>
											</div>
										</div>
										<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex items-center self-stretch gap-[3px]">
												<span className="text-[#667085] text-[11px] font-bold" >
													Draft Configurations
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/m1225kkf_expires_30_days.png"} 
													className="w-[1px] h-[30px] rounded-lg object-fill"
												/>
											</div>
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#172033] text-2xl font-bold" >
													4 Drafts
												</span>
												<span className="text-[#667085] text-[11px] w-[118px]" >
													Siap untuk dimasukkan antrean run
												</span>
											</div>
										</div>
										<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex justify-between items-center self-stretch">
												<span className="text-[#667085] text-[11px] font-bold" >
													Running
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/gu7rlcbz_expires_30_days.png"} 
													className="w-[30px] h-[30px] rounded-lg object-fill"
												/>
											</div>
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#172033] text-2xl font-bold" >
													0 Active
												</span>
												<span className="text-[#667085] text-[11px] w-24" >
													Tidak ada proses komputasi berjalan
												</span>
											</div>
										</div>
										<div className="flex flex-1 flex-col bg-white p-[18px] gap-3 rounded-xl border border-solid border-[#E4E7EC]">
											<div className="flex items-center self-stretch gap-0.5">
												<span className="text-[#667085] text-[11px] font-bold" >
													Completed Results
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/9bv73pw7_expires_30_days.png"} 
													className="w-4 h-[30px] rounded-lg object-fill"
												/>
											</div>
											<div className="flex flex-col items-start self-stretch gap-1">
												<span className="text-[#667085] text-2xl font-bold" >
													0
												</span>
												<div className="flex items-center self-stretch gap-1">
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/00lj82n0_expires_30_days.png"} 
														className="w-3 h-3 object-fill"
													/>
													<span className="text-[#F59E0B] text-[11px]" >
														No experiment results yet.
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-white p-4 mb-6 gap-3 rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex items-center gap-3">
											<div className="flex shrink-0 items-center bg-white py-2 px-3 gap-2 rounded-lg border border-solid border-[#E4E7EC]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/z5f1zb8p_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-lg object-fill"
												/>
												<span className="text-[#667085] text-[13px]" >
													Cari berdasarkan nama...
												</span>
											</div>
											<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-9 rounded-lg border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px]" >
													Status: Semua
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/50l08jgu_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-lg object-fill"
												/>
											</button>
											<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-12 rounded-lg border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px]" >
													Metode: Semua
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/efzmpncx_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-lg object-fill"
												/>
											</button>
										</div>
										<div className="flex items-center gap-3">
											<button className="flex shrink-0 items-center bg-white text-left py-2 px-3 gap-12 rounded-lg border border-solid border-[#E4E7EC]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px]" >
													Dataset: Semua
												</span>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6pcwovmy_expires_30_days.png"} 
													className="w-3.5 h-3.5 rounded-lg object-fill"
												/>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-[#F7F9FC] text-left py-2 px-4 rounded-lg border-0"
												onClick={()=>alert("Pressed!")}>
												<span className="text-[#172033] text-[13px] font-bold" >
													Reset Filter
												</span>
											</button>
										</div>
									</div>
									<div className="self-stretch bg-white mb-[258px] rounded-xl border border-solid border-[#E4E7EC]">
										<div className="flex items-center self-stretch p-5">
											<div className="flex flex-1 flex-col items-start mr-[89px] gap-1">
												<span className="text-[#172033] text-base font-bold" >
													Riwayat Uji Komparasi
												</span>
												<span className="text-[#667085] text-[13px]" >
													Daftar evaluasi performa model RAG terdaftar tanpa eksekusi angka kualifikasi
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-blue-50 py-1 px-3 rounded-md">
												<span className="text-blue-500 text-[11px] font-bold" >
													Evaluasi Terkontrol
												</span>
											</div>
										</div>
										<div className="flex items-center self-stretch bg-[#F7F9FC] py-3">
											<span className="text-[#667085] text-[11px] font-bold ml-4 mr-[19px]" >
												RUN ID
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[18px]" >
												NAMA EKSPERIMEN
											</span>
											<span className="text-[#667085] text-[11px] font-bold w-[49px] mr-[25px]" >
												VERSI DATASET
											</span>
											<span className="text-[#667085] text-[11px] font-bold w-[45px] mr-[34px]" >
												METODE DIUJI
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[21px]" >
												MODEL
											</span>
											<span className="text-[#667085] text-[11px] font-bold mr-[37px]" >
												STATUS
											</span>
											<span className="text-[#667085] text-[11px] font-bold w-[30px] mr-6" >
												PEMBUAT
											</span>
											<span className="text-[#667085] text-[11px] font-bold w-11 mr-[45px]" >
												MULAI/SELESAI
											</span>
											<span className="text-[#667085] text-[11px] font-bold" >
												AKSI
											</span>
										</div>
										<div className="flex items-center self-stretch py-3.5 px-4">
											<span className="text-[#172033] text-[13px] font-bold w-[37px] mr-[17px]" >
												RUN-102a
											</span>
											<span className="flex-1 text-[#172033] text-[13px] mr-[29px]" >
												Uji Coba Hybrid RAG RRF k=60
											</span>
											<span className="text-[#172033] text-[13px] w-16 mr-2.5" >
												S1_Mgt_Eval_v1.json
											</span>
											<span className="text-[#172033] text-[13px] mr-[11px]" >
												Hybrid RAG
											</span>
											<span className="text-[#667085] text-[13px] w-10 mr-[19px]" >
												Gemini Pro
											</span>
											<div className="flex flex-1 flex-col items-start mr-1">
												<div className="flex items-center bg-[#F7F9FC] py-[3px] px-2 gap-1 rounded-md border border-solid border-[#E4E7EC]">
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/pl97jhw8_expires_30_days.png"} 
														className="w-2.5 h-2.5 rounded-md object-fill"
													/>
													<span className="text-[#667085] text-[11px] font-bold" >
														Draft
													</span>
												</div>
											</div>
											<span className="text-[#172033] text-xs mr-[15px]" >
												Hendra
											</span>
											<span className="text-[#667085] text-xs mr-[77px]" >
												—
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/02j0vgbk_expires_30_days.png"} 
												className="w-[50px] h-[26px] object-fill"
											/>
										</div>
										<div className="flex items-center self-stretch py-3.5">
											<span className="text-[#172033] text-[13px] font-bold w-[37px] ml-4 mr-[17px]" >
												RUN-101b
											</span>
											<span className="text-[#172033] text-[13px] w-[114px] mr-2.5" >
												Komparasi Semantic vs BM25 Baseline
											</span>
											<span className="text-[#172033] text-[13px] w-16 mr-2.5" >
												S1_Mgt_Eval_v1.json
											</span>
											<span className="text-[#172033] text-[13px] w-[55px] mr-6" >
												Semantic RAG
											</span>
											<span className="text-[#667085] text-[13px] w-10 mr-[19px]" >
												Gemini Pro
											</span>
											<div className="flex flex-col shrink-0 items-center mr-1">
												<div className="flex items-center bg-amber-100 py-[3px] px-2 gap-1 rounded-md">
													<img
														src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/2wgmqo59_expires_30_days.png"} 
														className="w-2.5 h-2.5 rounded-md object-fill"
													/>
													<span className="text-[#F59E0B] text-[11px] font-bold" >
														Queued
													</span>
												</div>
											</div>
											<span className="text-[#172033] text-xs mr-[15px]" >
												Hendra
											</span>
											<span className="text-[#667085] text-xs w-[58px] mr-[31px]" >
												Menunggu pemicu
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/xceo6oow_expires_30_days.png"} 
												className="w-[50px] h-[26px] object-fill"
											/>
										</div>
										<div className="flex items-center self-stretch py-3.5">
											<span className="text-[#172033] text-[13px] font-bold w-10 ml-4 mr-3.5" >
												RUN-099x
											</span>
											<span className="text-[#172033] text-[13px] w-[109px] mr-[15px]" >
												Uji Validasi Eksperimen Zero-Shot LLM
											</span>
											<span className="text-[#172033] text-[13px] w-16 mr-2.5" >
												S1_Mgt_Eval_v1.json
											</span>
											<span className="text-[#172033] text-[13px] mr-[23px]" >
												LLM Only
											</span>
											<span className="text-[#667085] text-[13px] w-10 mr-[19px]" >
												Gemini Pro
											</span>
											<div className="flex shrink-0 items-center bg-red-50 py-[3px] px-2 mr-1 gap-1 rounded-md">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/viyalkg3_expires_30_days.png"} 
													className="w-2.5 h-2.5 rounded-md object-fill"
												/>
												<span className="text-red-500 text-[11px] font-bold" >
													Cancelled
												</span>
											</div>
											<span className="text-[#172033] text-xs mr-[15px]" >
												Hendra
											</span>
											<span className="text-[#667085] text-xs mr-2.5" >
												Batal otomatis
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/ldnnaz4y_expires_30_days.png"} 
												className="w-[50px] h-[26px] object-fill"
											/>
										</div>
										<div className="flex justify-between items-center self-stretch p-4">
											<span className="text-[#667085] text-[13px]" >
												Menampilkan 3 konfigurasi simulasi eksperimen aktif
											</span>
											<div className="flex shrink-0 items-center gap-2">
												<button className="flex flex-col shrink-0 items-start bg-[#F7F9FC] text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#667085] text-[13px] font-bold" >
														Sebelumnya
													</span>
												</button>
												<button className="flex flex-col shrink-0 items-start bg-[#163A5F] text-left py-1.5 px-3 rounded-md border-0"
													onClick={()=>alert("Pressed!")}>
													<span className="text-white text-[13px] font-bold" >
														1
													</span>
												</button>
												<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-md border border-solid border-[#E4E7EC]"
													onClick={()=>alert("Pressed!")}>
													<span className="text-[#172033] text-[13px] font-bold" >
														Selanjutnya
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start bg-white w-[380px] pt-6 px-6" 
									style={{
										boxShadow: "-4px 0px 16px #0000000F"
									}}>
									<div className="flex justify-between items-center self-stretch mb-[18px]">
										<div className="flex shrink-0 items-center gap-2.5">
											<span className="text-[#172033] text-base font-bold" >
												New Experiment
											</span>
											<div className="flex flex-col shrink-0 items-start bg-blue-50 py-[1px] px-1.5 rounded">
												<span className="text-blue-500 text-[10px] font-bold" >
													PROTOTYPE
												</span>
											</div>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/an6yzy6d_expires_30_days.png"} 
											className="w-4 h-4 object-fill"
										/>
									</div>
									<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[17px]">
									</div>
									<div className="flex flex-col items-start self-stretch mb-[18px] gap-1.5">
										<span className="text-[#667085] text-[11px] font-bold" >
											NAMA EKSPERIMEN
										</span>
										<input
											placeholder="Uji Coba Hybrid RAG RRF k=60"
											value={input3}
											onChange={(event)=>onChangeInput3(event.target.value)}
											className="self-stretch text-[#172033] bg-white text-[13px] py-2.5 px-3 rounded-lg border border-solid border-[#E4E7EC]"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch mb-[18px] gap-1.5">
										<span className="text-[#667085] text-[11px] font-bold" >
											EVALUATION DATASET
										</span>
										<div className="flex justify-between items-center self-stretch bg-white py-2.5 px-3 rounded-lg border border-solid border-[#E4E7EC]">
											<span className="text-[#172033] text-[13px]" >
												S1_Mgt_Eval_v1.json (120 Cases)
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/y7a21t7n_expires_30_days.png"} 
												className="w-3.5 h-3.5 rounded-lg object-fill"
											/>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch mb-[18px] gap-1.5">
										<span className="text-[#667085] text-[11px] font-bold" >
											LLM MODEL
										</span>
										<div className="flex justify-between items-center self-stretch bg-white py-2.5 px-3 rounded-lg border border-solid border-[#E4E7EC]">
											<span className="text-[#172033] text-[13px]" >
												Gemini Pro Academic
											</span>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/drl7jdf3_expires_30_days.png"} 
												className="w-3.5 h-3.5 rounded-lg object-fill"
											/>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch mb-[18px] gap-2">
										<span className="text-[#667085] text-[11px] font-bold" >
											METODE YANG DIUJI
										</span>
										<div className="flex items-center self-stretch gap-2">
											<div className="bg-white w-4 h-4 rounded border border-solid border-[#E4E7EC]">
											</div>
											<span className="text-[#172033] text-[13px]" >
												LLM Only
											</span>
										</div>
										<div className="flex items-center self-stretch gap-2">
											<div className="bg-white w-4 h-4 rounded border border-solid border-[#E4E7EC]">
											</div>
											<span className="text-[#172033] text-[13px]" >
												Semantic RAG
											</span>
										</div>
										<div className="flex items-center self-stretch gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6jewer9y_expires_30_days.png"} 
												className="w-4 h-4 rounded object-fill"
											/>
											<span className="text-[#172033] text-[13px] font-bold" >
												Hybrid RAG (Active)
											</span>
										</div>
									</div>
									<div className="flex justify-between items-center self-stretch py-1 mb-[18px]">
										<span className="text-[#172033] text-[13px] font-bold" >
											Evidence-First Mode
										</span>
										<div className="shrink-0 items-start bg-[#163A5F] pb-1 pl-4 pr-1 rounded-[10px]">
											<div className="bg-white w-4 h-4 rounded-lg">
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-[#F7F9FC] py-3 pr-3 mb-[18px] gap-2 rounded-lg">
										<span className="text-[#667085] text-[11px] font-bold ml-3" >
											RETRIEVAL SETTINGS SUMMARY
										</span>
										<div className="flex justify-between items-center self-stretch ml-3">
											<span className="text-[#667085] text-xs" >
												Vector Weight:
											</span>
											<span className="text-[#172033] text-xs font-bold" >
												0.7 (Cosine)
											</span>
										</div>
										<div className="flex justify-between items-center self-stretch ml-3">
											<span className="text-[#667085] text-xs" >
												BM25 Weight:
											</span>
											<span className="text-[#172033] text-xs font-bold" >
												0.3 (Keyword)
											</span>
										</div>
										<div className="flex justify-between items-center self-stretch ml-3">
											<span className="text-[#667085] text-xs" >
												RRF k Constant:
											</span>
											<span className="text-[#172033] text-xs font-bold" >
												60
											</span>
										</div>
										<div className="flex justify-between items-center self-stretch ml-3">
											<span className="text-[#667085] text-xs" >
												Top-k Chunks:
											</span>
											<span className="text-[#172033] text-xs font-bold" >
												5 Chunks
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch mb-[18px] gap-2">
										<span className="text-[#667085] text-[11px] font-bold" >
											RAGAS METRICS CHECKLIST
										</span>
										<div className="flex items-center self-stretch gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/hohf8pql_expires_30_days.png"} 
												className="w-4 h-4 rounded object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Faithfulness
											</span>
										</div>
										<div className="flex items-center self-stretch gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/vhcie74w_expires_30_days.png"} 
												className="w-4 h-4 rounded object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Answer Relevancy
											</span>
										</div>
										<div className="flex items-center self-stretch gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/5az246iq_expires_30_days.png"} 
												className="w-4 h-4 rounded object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Context Precision
											</span>
										</div>
										<div className="flex items-center self-stretch gap-2">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/oavpyjxa_expires_30_days.png"} 
												className="w-4 h-4 rounded object-fill"
											/>
											<span className="text-[#172033] text-[13px]" >
												Context Recall
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch mb-[18px] gap-1">
										<span className="text-[#667085] text-[11px] font-bold" >
											ADVANCED CONFIGURATION
										</span>
										<input
											placeholder="Configuration placeholder"
											value={input4}
											onChange={(event)=>onChangeInput4(event.target.value)}
											className="self-stretch text-[#667085] bg-[#F7F9FC] text-xs p-2.5 rounded-md border border-solid border-[#E4E7EC]"
										/>
									</div>
									<div className="flex flex-col items-start self-stretch bg-emerald-50 py-3 pr-3 mb-[18px] gap-1 rounded-lg border border-solid border-emerald-500">
										<div className="flex items-center self-stretch ml-3 gap-1.5">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/58bu2rbc_expires_30_days.png"} 
												className="w-3.5 h-3.5 object-fill"
											/>
											<span className="text-emerald-500 text-xs font-bold" >
												Dataset Ready (DEMO)
											</span>
										</div>
										<span className="text-[#172033] text-[11px] ml-3" >
											120 test cases terpetakan secara lengkap.
										</span>
									</div>
									<div className="self-stretch bg-[#E4E7EC] h-[1px] mb-[17px]">
									</div>
									<div className="flex items-center self-stretch mb-[18px] gap-3">
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-[38px] rounded-lg border border-solid border-[#E4E7EC]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#172033] text-[13px] font-bold" >
												Save as Draft
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#163A5F] text-left py-2.5 px-[21px] rounded-lg border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-[13px] font-bold" >
												Queue Experiment
											</span>
										</button>
									</div>
									<span className="text-[#667085] text-[10px] w-[297px] mb-[211px]" >
										* Antrean simulasi tidak menghasilkan klaim atau kesimpulan penelitian formal sampai seluruh proses evaluasi kualifikasi dan Human Review selesai disetujui.
									</span>
								</div>
							</div>
						</div>
						<div className="bg-white w-[736px] absolute bottom-[-116px] left-8 pb-[101px] rounded-xl border border-solid border-[#E4E7EC]">
							<div className="flex flex-col items-start self-stretch py-5 pl-5 gap-1">
								<span className="text-[#172033] text-base font-bold mr-[180px]" >
									Deskripsi Pendekatan Metode AI Generator
								</span>
								<span className="text-[#667085] text-[13px]" >
									Sistem evaluasi menyandingkan tiga pilihan strategi perolehan data bukti (Evidence)
								</span>
							</div>
							<div className="flex items-start self-stretch py-4 px-5 gap-4">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/h5njuwtk_expires_30_days.png"} 
									className="w-[38px] h-[38px] rounded-lg object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-[#172033] text-sm font-bold" >
										1. LLM Only (Zero-shot)
									</span>
									<span className="text-[#667085] text-[13px] w-[570px]" >
										Pendekatan murni berbasis pengetahuan generik LLM tanpa menyematkan dokumen rujukan. Berpeluang menghasilkan data simulasi tanpa bukti spesifik borang LAMEMBA.
									</span>
								</div>
							</div>
							<div className="flex items-start self-stretch py-4 px-5 gap-4">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/6le98qua_expires_30_days.png"} 
									className="w-[38px] h-[38px] rounded-lg object-fill"
								/>
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-[#172033] text-sm font-bold" >
										2. Semantic RAG (Vector Search Only)
									</span>
									<span className="text-[#667085] text-[13px] w-[601px]" >
										Melakukan pencarian kemiripan kosinus pada embedding dokumen kualitatif. Memperoleh konteks dokumen yang luas tetapi dapat mengesampingkan angka kuantitatif spesifik dari tabel DKPS.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}