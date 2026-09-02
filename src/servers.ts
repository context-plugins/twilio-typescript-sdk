import type { UrlTemplate } from "./core/index.js";
import { SdkError } from "./core/index.js";

export const ServerEnvironment = {
  Production: "production",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type DefaultServerOptions = {
  production?: { baseUrl?: string };
};

export type Default1ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default2ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default3ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default4ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default5ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default6ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default7ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default8ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default9ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default10ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default11ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default12ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default13ServerOptions = {
  production?: { baseUrl?: string };
};

export type Default14ServerOptions = {
  production?: { baseUrl?: string };
};

export type ServerOptions = {
  default?: DefaultServerOptions;
  default1?: Default1ServerOptions;
  default2?: Default2ServerOptions;
  default3?: Default3ServerOptions;
  default4?: Default4ServerOptions;
  default5?: Default5ServerOptions;
  default6?: Default6ServerOptions;
  default7?: Default7ServerOptions;
  default8?: Default8ServerOptions;
  default9?: Default9ServerOptions;
  default10?: Default10ServerOptions;
  default11?: Default11ServerOptions;
  default12?: Default12ServerOptions;
  default13?: Default13ServerOptions;
  default14?: Default14ServerOptions;
};

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  default1: (subPath: string) => UrlTemplate;
  default2: (subPath: string) => UrlTemplate;
  default3: (subPath: string) => UrlTemplate;
  default4: (subPath: string) => UrlTemplate;
  default5: (subPath: string) => UrlTemplate;
  default6: (subPath: string) => UrlTemplate;
  default7: (subPath: string) => UrlTemplate;
  default8: (subPath: string) => UrlTemplate;
  default9: (subPath: string) => UrlTemplate;
  default10: (subPath: string) => UrlTemplate;
  default11: (subPath: string) => UrlTemplate;
  default12: (subPath: string) => UrlTemplate;
  default13: (subPath: string) => UrlTemplate;
  default14: (subPath: string) => UrlTemplate;
};

export const DEFAULT_SERVER_OPTIONS = {
  default: {
    production: { baseUrl: "https://api.twilio.com" },
  },
  default1: {
    production: { baseUrl: "https://messaging.twilio.com" },
  },
  default2: {
    production: { baseUrl: "https://content.twilio.com" },
  },
  default3: {
    production: { baseUrl: "https://verify.twilio.com" },
  },
  default4: {
    production: { baseUrl: "https://lookups.twilio.com" },
  },
  default5: {
    production: { baseUrl: "https://numbers.twilio.com" },
  },
  default6: {
    production: { baseUrl: "https://video.twilio.com" },
  },
  default7: {
    production: { baseUrl: "https://conversations.twilio.com" },
  },
  default8: {
    production: { baseUrl: "https://taskrouter.twilio.com" },
  },
  default9: {
    production: { baseUrl: "https://trusthub.twilio.com" },
  },
  default10: {
    production: { baseUrl: "https://proxy.twilio.com" },
  },
  default11: {
    production: { baseUrl: "https://studio.twilio.com" },
  },
  default12: {
    production: { baseUrl: "https://sync.twilio.com" },
  },
  default13: {
    production: { baseUrl: "https://flex-api.twilio.com" },
  },
  default14: {
    production: { baseUrl: "https://insights.twilio.com" },
  },
} as const satisfies ServerOptions;

export function buildServers(environment: ServerEnvironment, options: ServerOptions): Servers {
  return {
    default: (s) => defaultServer(environment, s, options.default),
    default1: (s) => default1Server(environment, s, options.default1),
    default2: (s) => default2Server(environment, s, options.default2),
    default3: (s) => default3Server(environment, s, options.default3),
    default4: (s) => default4Server(environment, s, options.default4),
    default5: (s) => default5Server(environment, s, options.default5),
    default6: (s) => default6Server(environment, s, options.default6),
    default7: (s) => default7Server(environment, s, options.default7),
    default8: (s) => default8Server(environment, s, options.default8),
    default9: (s) => default9Server(environment, s, options.default9),
    default10: (s) => default10Server(environment, s, options.default10),
    default11: (s) => default11Server(environment, s, options.default11),
    default12: (s) => default12Server(environment, s, options.default12),
    default13: (s) => default13Server(environment, s, options.default13),
    default14: (s) => default14Server(environment, s, options.default14),
  };
}

function defaultServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: DefaultServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default1Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default1ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default1.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default2Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default2ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default2.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default3Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default3ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default3.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default4Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default4ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default4.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default5Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default5ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default5.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default6Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default6ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default6.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default7Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default7ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default7.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default8Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default8ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default8.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default9Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default9ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default9.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default10Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default10ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default10.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default11Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default11ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default11.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default12Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default12ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default12.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default13Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default13ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default13.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function default14Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: Default14ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default14.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new SdkError({ message: `Unknown server environment: ${String(environment)}` });
}
