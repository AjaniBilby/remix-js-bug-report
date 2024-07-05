import { Form, useRouteError } from "@remix-run/react";
import { MouseEvent, useState } from "react";

export async function action() {
	return {};
}

export default function Main() {
	const [ crash, setCrash ] = useState(false);

	const toggle = (ev: MouseEvent) => {
		ev.preventDefault();
		setCrash(!crash);
	}

	return <Form method="post" encType="multipart/form-data" style={{
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "10px"
	}}>
		{
			crash ? <>
				<input name="value" defaultValue="fish"></input>
				<button onClick={toggle}>Make it crash</button>
			</> : <>
				<button onClick={toggle}>I don&apos;t it to crash</button>
			</>
		}

		<button type="submit">Submit Form</button>
	</Form>;
}

export function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);
	return <div>{String(error)}</div>;
}