import { McpServer } from 'next/dist/compiled/@modelcontextprotocol/sdk/server/mcp';
import type { HmrMessageSentToBrowser } from '../dev/hot-reloader-types';
export interface McpServerOptions {
    projectPath: string;
    distDir: string;
    sendHmrMessage: (message: HmrMessageSentToBrowser) => void;
    getActiveConnectionCount: () => number;
    getDevServerUrl: () => string | undefined;
}
export declare const getOrCreateMcpServer: (options: McpServerOptions) => McpServer;
