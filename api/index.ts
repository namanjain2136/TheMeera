import type { IncomingMessage, ServerResponse } from 'http';

const noopHeaders = new Set(['transfer-encoding', 'content-encoding', 'connection']);

function toFetchHeaders(incomingHeaders: IncomingMessage['headers']) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(incomingHeaders)) {
    if (!key || value === undefined) continue;
    if (typeof value === 'string') {
      headers.set(key, value);
    } else if (Array.isArray(value)) {
      for (const v of value) {
        if (v) headers.append(key, v);
      }
    }
  }
  return headers;
}

function toNodeHeaders(headers: Headers) {
  const obj: Record<string, string> = {};
  for (const [key, value] of headers) {
    if (noopHeaders.has(key.toLowerCase())) continue;
    obj[key] = value;
  }
  return obj;
}

async function createRequest(req: IncomingMessage) {
  const host = req.headers.host ?? 'localhost';
  const url = new URL(req.url ?? '/', `https://${host}`);
  const init: RequestInit = {
    method: req.method,
    headers: toFetchHeaders(req.headers),
  };

  if (req.method && req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req;
  }

  return new Request(url.toString(), init);
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const { default: server } = await import('../dist/server/index.js');
  const request = await createRequest(req);
  const response = await server.fetch(request, {}, {});
  const body = await response.arrayBuffer();

  res.writeHead(response.status, toNodeHeaders(response.headers));
  res.end(Buffer.from(body));
}
