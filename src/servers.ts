import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default1: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default2: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default3: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default4: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default5: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default6: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default7: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default8: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default9: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default10: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default11: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default12: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default13: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default14: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.twilio.com")) },
  default1: { baseUrl: s.of(s.defaulted(s.string(), "https://messaging.twilio.com")) },
  default2: { baseUrl: s.of(s.defaulted(s.string(), "https://content.twilio.com")) },
  default3: { baseUrl: s.of(s.defaulted(s.string(), "https://verify.twilio.com")) },
  default4: { baseUrl: s.of(s.defaulted(s.string(), "https://lookups.twilio.com")) },
  default5: { baseUrl: s.of(s.defaulted(s.string(), "https://numbers.twilio.com")) },
  default6: { baseUrl: s.of(s.defaulted(s.string(), "https://video.twilio.com")) },
  default7: { baseUrl: s.of(s.defaulted(s.string(), "https://conversations.twilio.com")) },
  default8: { baseUrl: s.of(s.defaulted(s.string(), "https://taskrouter.twilio.com")) },
  default9: { baseUrl: s.of(s.defaulted(s.string(), "https://trusthub.twilio.com")) },
  default10: { baseUrl: s.of(s.defaulted(s.string(), "https://proxy.twilio.com")) },
  default11: { baseUrl: s.of(s.defaulted(s.string(), "https://studio.twilio.com")) },
  default12: { baseUrl: s.of(s.defaulted(s.string(), "https://sync.twilio.com")) },
  default13: { baseUrl: s.of(s.defaulted(s.string(), "https://flex-api.twilio.com")) },
  default14: { baseUrl: s.of(s.defaulted(s.string(), "https://insights.twilio.com")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    default1: resolveBaseUrl(default1Server(options)),
    default2: resolveBaseUrl(default2Server(options)),
    default3: resolveBaseUrl(default3Server(options)),
    default4: resolveBaseUrl(default4Server(options)),
    default5: resolveBaseUrl(default5Server(options)),
    default6: resolveBaseUrl(default6Server(options)),
    default7: resolveBaseUrl(default7Server(options)),
    default8: resolveBaseUrl(default8Server(options)),
    default9: resolveBaseUrl(default9Server(options)),
    default10: resolveBaseUrl(default10Server(options)),
    default11: resolveBaseUrl(default11Server(options)),
    default12: resolveBaseUrl(default12Server(options)),
    default13: resolveBaseUrl(default13Server(options)),
    default14: resolveBaseUrl(default14Server(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    default1: (subPath) => ({ baseUrl: base.default1, subPath }),
    default2: (subPath) => ({ baseUrl: base.default2, subPath }),
    default3: (subPath) => ({ baseUrl: base.default3, subPath }),
    default4: (subPath) => ({ baseUrl: base.default4, subPath }),
    default5: (subPath) => ({ baseUrl: base.default5, subPath }),
    default6: (subPath) => ({ baseUrl: base.default6, subPath }),
    default7: (subPath) => ({ baseUrl: base.default7, subPath }),
    default8: (subPath) => ({ baseUrl: base.default8, subPath }),
    default9: (subPath) => ({ baseUrl: base.default9, subPath }),
    default10: (subPath) => ({ baseUrl: base.default10, subPath }),
    default11: (subPath) => ({ baseUrl: base.default11, subPath }),
    default12: (subPath) => ({ baseUrl: base.default12, subPath }),
    default13: (subPath) => ({ baseUrl: base.default13, subPath }),
    default14: (subPath) => ({ baseUrl: base.default14, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function default1Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default1.baseUrl.decode(options.serverOptions?.default1?.baseUrl) };
}

function default2Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default2.baseUrl.decode(options.serverOptions?.default2?.baseUrl) };
}

function default3Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default3.baseUrl.decode(options.serverOptions?.default3?.baseUrl) };
}

function default4Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default4.baseUrl.decode(options.serverOptions?.default4?.baseUrl) };
}

function default5Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default5.baseUrl.decode(options.serverOptions?.default5?.baseUrl) };
}

function default6Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default6.baseUrl.decode(options.serverOptions?.default6?.baseUrl) };
}

function default7Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default7.baseUrl.decode(options.serverOptions?.default7?.baseUrl) };
}

function default8Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default8.baseUrl.decode(options.serverOptions?.default8?.baseUrl) };
}

function default9Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default9.baseUrl.decode(options.serverOptions?.default9?.baseUrl) };
}

function default10Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default10.baseUrl.decode(options.serverOptions?.default10?.baseUrl) };
}

function default11Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default11.baseUrl.decode(options.serverOptions?.default11?.baseUrl) };
}

function default12Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default12.baseUrl.decode(options.serverOptions?.default12?.baseUrl) };
}

function default13Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default13.baseUrl.decode(options.serverOptions?.default13?.baseUrl) };
}

function default14Server(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default14.baseUrl.decode(options.serverOptions?.default14?.baseUrl) };
}
