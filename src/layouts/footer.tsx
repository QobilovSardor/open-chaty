import './layout.css';

export const Footer = () => {
	return (
		<div className="container">
			<footer className="pt-[122px] pb-[31px] text-center">
				<h3>Connect your finances with</h3>
				<h2 className='text-white lg-sm:text-[98px] md:text-[60px] text-[40px] md:leading-[119px] leading-normal font-bold lg-sm:mb-[60px] mb-[20px]'>
					OpenChaty
				</h2>
				<a className="btn bg-white text-black text-[32px] md:mb-[88px] mb-[38px]" href="#!">
					Join OpenChaty now
				</a>

				<ul className='flex md:flex-nowrap flex-wrap items-center md:justify-between justify-center mx-[204px]'>
					<li>
						<a className='py-[10px] px-[20px] lg-sm:text-[20px] sm:text-[18px] text-[16px] whitespace-nowrap leading-160 font-normal text-[#7C7C7C] bg-[#111]' href="#!">
							Terms & Agreements
						</a>
					</li>
					<li className='py-[10px] px-[20px] lg-sm:text-[20px] sm:text-[18px] text-[16px] leading-160 font-normal text-[#7C7C7C]'>
						©2024 OpenChaty All Rights Reserved
					</li>
					<li className='md:order-[0] -order-2'>
						<a className='py-[10px] px-[20px] lg-sm:text-[20px] sm:text-[18px] text-[16px] whitespace-nowrap leading-160 font-normal text-[#7C7C7C] bg-[#111]' href="#!">
							Privacy Policy
						</a>
					</li>
				</ul>

			</footer>
		</div>
	)
}
