

const ScrollDownRotate = () => {
  return (
		<div className='xl:h-[100px] xl:w-[100px] xxl:w-[125px] xxl:h-[125px] flex items-center justify-center '>
			<div
				className='rotating'
				style={{
					transform: "translate3d(0px, 0px, 0px) rotate(217.224deg)",
				}}
			>
				<svg height='100' width='100'>
					<path
						id='ellipse-id-r2-'
						style={{ fill: "none" }}
						d='M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0'
					></path>
					<text
						style={{
							fontSize: "11px",
							letterSpacing: "6.5px",
							fill: "#000",
						}}
					>
						<textPath xlinkHref='#ellipse-id-r2-' startOffset='0'>
							<tspan>SCROLL DOWN SCROLL DOWN</tspan>
						</textPath>
					</text>
				</svg>
			</div>
			<div className='absolute h-[28px] w-[28px]'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25'>
					<path
						style={{ fill: "#232326" }}
						d='m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z'
					/>
				</svg>
			</div>
		</div>
	);
}

export default ScrollDownRotate