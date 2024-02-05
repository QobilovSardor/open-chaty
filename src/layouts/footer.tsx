import './layout.css';

export const Footer = () => {
	return (
		<div className="container">
			<footer className="pt-[122px] pb-[31px] text-center">
				<h3>Connect your finances with</h3>
				<h2 className='text-white text-[98px] leading-[119px] font-bold mb-[60px]'>
					OpenChaty
				</h2>
				<a className="btn bg-white text-black text-[32px] mb-[88px]" href="#!">
					Join OpenChaty now
				</a>

				<ul className='flex items-center justify-between mx-[204px]'>
					<li>
						<a className='py-[10px] px-[20px] text-[20px] leading-160 font-normal text-[#7C7C7C] bg-[#111]' href="#!">
							Terms & Agreements
						</a>
					</li>
					<li className='py-[10px] px-[20px] text-[20px] leading-160 font-normal text-[#7C7C7C]'>
						©2024 OpenChaty All Rights Reserved
					</li>
					<li>
						<a className='py-[10px] px-[20px] text-[20px] leading-160 font-normal text-[#7C7C7C] bg-[#111]' href="#!">
							Privacy Policy
						</a>
					</li>
				</ul>

			</footer>
		</div>
	)
}
