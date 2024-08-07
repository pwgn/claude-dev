export type ApiProvider = "anthropic" | "openrouter" | "bedrock" | "openai"

export interface ApiHandlerOptions {
	apiKey?: string // anthropic or openai
	openRouterApiKey?: string
	awsAccessKey?: string
	awsSecretKey?: string
	awsRegion?: string
}

export type ApiConfiguration = ApiHandlerOptions & {
	apiProvider?: ApiProvider
}
