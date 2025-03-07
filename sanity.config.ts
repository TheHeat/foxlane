// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
	name: "fox-lane",
	title: "Fox Lane",
	projectId: "tsbiqnoe",
	dataset: "production",
	plugins: [structureTool()],
	schema: {
		types: [
			{
				name: "resident",
				title: "Resident",
				type: "document",
				fields: [
					{
						name: "title",
						type: "string",
					},

					{
						name: "excerpt",
						type: "text",
					},
					{
						name: "slug",
						type: "slug",
						options: { source: "title" },
						default: { source: "title" },
					},
					{
						name: "image",
						type: "image",
					},
					{
						name: "body",
						type: "array",
						of: [{ type: "block" }],
					},
					{
						name: "websites",
						title: "Websites",
						type: "array",
						of: [{ type: "url" }],
					},
					{
						name: "instagram",
						type: "url",
					},
					{
						name: "linkedIn",
						type: "url",
					},
					{
						name: "facebook",
						type: "url",
					},
					{
						name: "etsy",
						type: "url",
					},
					{
						name: "eventbrite",
						type: "url",
					},
				],
			},
		],
	},
});
