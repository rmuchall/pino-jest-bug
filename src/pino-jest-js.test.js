const pino = require("pino");

test("pino-test", () => {
    const pinoLog = pino({
        name: "pino-test",
        level: "trace",
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
            }
        }
    });

    pinoLog.debug("This is a test (pino)");
    expect(true).toBeTruthy();
});
