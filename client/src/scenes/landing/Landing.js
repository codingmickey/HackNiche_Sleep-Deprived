import React from "react";
import DrawerAppBar from "./DrawerAppBar";
import "./Landing.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
export const Landing = () => {
	return (
		<div>
			<DrawerAppBar />
			<div className="box">
				<div
					className="inner-box"
					style={{ paddingLeft: "150px", paddingTop: "5px" }}
				>
					<h1>Live, Grow, Heal</h1>
					<h3 style={{ padding: "-20px 0px 0px 0px", fontWeight: 100 }}>
						<span style={{ color: "#eb774d", fontWeight: 300 }}>Army</span>
						-App{" "}
					</h3>
					<p style={{ maxWidth: "350px" }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
				</div>
				<div className="inner-box">
					<img
						src="https://img.freepik.com/free-vector/flat-design-soldier-silhouette_23-2149441626.jpg?w=900&t=st=1676615873~exp=1676616473~hmac=6eb4a9724b3821137bea31599e51b2729f73e211d3e249bec62e012066a308ed"
						alt=""
						height="300px"
						width="400px"
						style={{
							borderRadius: "20%",
							backgroundColor: "#f6f6f6",
						}}
					></img>
				</div>
			</div>
			<Stack direction="row" spacing={2}>
				<Button
					className="box"
					component={Link}
					to="/login"
					sx={{
						padding: "20px",
						marginLeft: "150px",
						backgroundColor: "#138808",
						color: "#fff",
					}}
					variant="contained"
				>
					Signup/Login
				</Button>
			</Stack>
		</div>
	);
};
