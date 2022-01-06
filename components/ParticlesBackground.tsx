import React from "react";
import Particles, { RecursivePartial, IOptions } from "react-tsparticles";
import { BaseComponentProps } from "../types/BaseComponent";
import { joinClasses } from "../util/ClassNames";

const particlesConfig: RecursivePartial<IOptions> = {
	background: {
		color: {
			value: "#0c4a6e",
		},
	},
	fpsLimit: 60,
	interactivity: {
		detectsOn: "window",
		events: {
			resize: true,
		},
	},
	particles: {
		collisions: {
			enable: false,
		},
		move: {
			direction: "left",
			enable: true,
			outMode: "out",
			random: false,
			speed: {
				min: 0.2,
				max: 0.5,
			},
			straight: false,
		},
		number: {
			density: {
				enable: true,
				value_area: 800,
			},
			value: 100,
		},
		opacity: {
			value: 0.7,
		},
		shape: {
			type: "image",
			options: {
				images: [
					{
						height: 128,
						width: 128,
						src: "/octopus.png",
					},
					{
						height: 60,
						width: 90,
						src: "/tiny_fish.png",
					},
					{
						height: 120,
						width: 180,
						src: "/tiny_fish.png",
					},
					{
						height: 2000,
						width: 2000,
						src: "/sea-turtle.png",
					},
				],
			},
		},
		size: {
			random: true,
			value: {
				min: 10,
				max: 20,
			},
		},
	},
	detectRetina: true,
};

type ParticlesBackgroundProps = BaseComponentProps;

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
	additionalClassNames = "",
}) => {
	return (
		<div
			className={`${joinClasses(additionalClassNames)} absolute h-full w-full`}
		>
			<Particles
				id="tsparticles"
				init={null}
				loaded={null}
				options={particlesConfig}
				className={"w-full h-full"}
			/>
		</div>
	);
};

export default ParticlesBackground;
