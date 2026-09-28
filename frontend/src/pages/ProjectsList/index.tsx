import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	const [input5, onChangeInput5] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F7F9FC] overflow-hidden">
				<div className="flex flex-col items-center self-stretch bg-[#00000040] py-[292px]">
					<div className="flex flex-col bg-white w-[540px] p-8 gap-6 rounded-2xl" 
						style={{
							boxShadow: "0px 10px 24px #0000001A"
						}}>
						<div className="flex justify-between items-center self-stretch">
							<div className="flex flex-col shrink-0 items-start gap-1">
								<span className="text-[#172033] text-lg font-bold mr-[187px]" >
									Buat Proyek Baru
								</span>
								<span className="text-[#667085] text-xs" >
									Tambahkan instansi akademik baru untuk sinkronisasi RAG.
								</span>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hRZRl9KuH0/t6p89kjk_expires_30_days.png"} 
								className="w-[26px] h-[26px] rounded-lg object-fill"
							/>
						</div>
						<div className="flex flex-col items-start self-stretch">
							<div className="flex flex-col items-start self-stretch mb-4 gap-1.5">
								<div className="flex items-center gap-1.5">
									<span className="text-[#172033] text-xs font-bold" >
										Perguruan Tinggi / Instansi
									</span>
									<span className="text-red-500 text-xs" >
										*
									</span>
								</div>
								<input
									placeholder="Contoh: Universitas Indonesia Mulia"
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									className="self-stretch text-[#667085] bg-[#F7F9FC] text-[13px] py-[9px] px-3.5 rounded-lg border border-solid border-[#E4E7EC]"
								/>
							</div>
							<div className="flex flex-col items-start self-stretch mb-4 gap-1.5">
								<div className="flex items-center gap-[7px]">
									<span className="text-[#172033] text-xs font-bold" >
										Unit Pengelola Program Studi (UPPS)
									</span>
									<span className="text-red-500 text-xs" >
										*
									</span>
								</div>
								<input
									placeholder="Contoh: Fakultas Ekonomi & Bisnis"
									value={input2}
									onChange={(event)=>onChangeInput2(event.target.value)}
									className="self-stretch text-[#667085] bg-[#F7F9FC] text-[13px] py-[9px] px-3.5 rounded-lg border border-solid border-[#E4E7EC]"
								/>
							</div>
							<div className="flex items-center self-stretch mb-4 gap-4">
								<div className="flex flex-col items-start w-[230px] gap-1.5">
									<div className="flex items-center gap-[7px]">
										<span className="text-[#172033] text-xs font-bold" >
											Jenis Program (PS)
										</span>
										<span className="text-red-500 text-xs" >
											*
										</span>
									</div>
									<input
										placeholder="S1 / S2 / S3"
										value={input3}
										onChange={(event)=>onChangeInput3(event.target.value)}
										className="self-stretch text-[#667085] bg-[#F7F9FC] text-[13px] py-[9px] px-3.5 rounded-lg border border-solid border-[#E4E7EC]"
									/>
								</div>
								<div className="flex flex-col items-start w-[230px] gap-1.5">
									<div className="flex items-center gap-1.5">
										<span className="text-[#172033] text-xs font-bold" >
											Tahun Akreditasi
										</span>
										<span className="text-red-500 text-xs" >
											*
										</span>
									</div>
									<input
										placeholder="Contoh: 2026"
										value={input4}
										onChange={(event)=>onChangeInput4(event.target.value)}
										className="self-stretch text-[#667085] bg-[#F7F9FC] text-[13px] py-[9px] px-3.5 rounded-lg border border-solid border-[#E4E7EC]"
									/>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch mb-4 gap-1.5">
								<div className="flex items-center gap-[7px]">
									<span className="text-[#172033] text-xs font-bold" >
										Nama Program Studi
									</span>
									<span className="text-red-500 text-xs" >
										*
									</span>
								</div>
								<input
									placeholder="Contoh: Manajemen / Kewirausahaan"
									value={input5}
									onChange={(event)=>onChangeInput5(event.target.value)}
									className="self-stretch text-[#667085] bg-[#F7F9FC] text-[13px] py-[9px] px-3.5 rounded-lg border border-solid border-[#E4E7EC]"
								/>
							</div>
							<div className="flex flex-col items-start self-stretch mb-[15px] gap-1.5">
								<span className="text-[#172033] text-xs font-bold" >
									Status Mulai
								</span>
								<div className="flex items-center self-stretch gap-3">
									<button className="flex flex-col shrink-0 items-start bg-amber-100 text-left py-[7px] px-[87px] rounded-lg border border-solid border-[#F59E0B]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#F59E0B] text-xs font-bold" >
											Persiapan
										</span>
									</button>
									<button className="flex flex-col shrink-0 items-start bg-[#F7F9FC] text-left py-[7px] px-[73px] rounded-lg border border-solid border-[#E4E7EC]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#667085] text-xs font-bold" >
											Aktif langsung
										</span>
									</button>
								</div>
							</div>
							<span className="text-[#667085] text-[11px] w-[453px]" >
								* Semua data proyek yang diinput di sini akan ditandai secara transparan sebagai mock context DEMO untuk verifikasi asisten akademik LAMEMBA.
							</span>
						</div>
						<div className="flex justify-end items-center self-stretch gap-3">
							<button className="flex flex-col shrink-0 items-start bg-white text-left py-[9px] px-4 rounded-lg border border-solid border-[#E4E7EC]"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#667085] text-[13px] font-bold" >
									Batal
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start bg-[#163A5F] text-left py-[9px] px-4 rounded-lg border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-[13px] font-bold" >
									Buat Proyek
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}