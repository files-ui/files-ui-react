import { McpServer } from 'next/dist/compiled/@modelcontextprotocol/sdk/server/mcp';
import { registerGetProjectMetadataTool } from './tools/get-project-metadata';
import { registerGetErrorsTool } from './tools/get-errors';
import { registerGetPageMetadataTool } from './tools/get-page-metadata';
import { registerGetLogsTool } from './tools/get-logs';
import { registerGetActionByIdTool } from './tools/get-server-action-by-id';
let mcpServer;
export const getOrCreateMcpServer = (options)=>{
    if (mcpServer) {
        return mcpServer;
    }
    mcpServer = new McpServer({
        name: 'Next.js MCP Server',
        version: '0.1.0'
    });
    registerGetProjectMetadataTool(mcpServer, options.projectPath, options.getDevServerUrl);
    registerGetErrorsTool(mcpServer, options.sendHmrMessage, options.getActiveConnectionCount);
    registerGetPageMetadataTool(mcpServer, options.sendHmrMessage, options.getActiveConnectionCount);
    registerGetLogsTool(mcpServer, options.distDir);
    registerGetActionByIdTool(mcpServer, options.distDir);
    return mcpServer;
};

//# sourceMappingURL=get-or-create-mcp-server.js.map