import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
	const [state, handleSubmit] = useForm('xknddjeb');

	if (state?.succeeded) {
		return <p className="text-green-500">Thanks for joining!</p>;
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
					Email
				</label>
				<input
					id="email"
					type="email"
					name="email"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
					className="mt-1 text-red-600 text-sm"
				/>
			</div>
			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700">
					Mensaje
				</label>
				<textarea
					id="message"
					name="message"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
					className="mt-1 text-red-600 text-sm"
				/>
			</div>
			<div>
				<button type="submit" disabled={state.submitting} class="btn btn--secondary w-full">
					Enviar
				</button>
			</div>
		</form>
	);
}
