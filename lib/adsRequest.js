/**
 * Run a callback-based ADS request with cancellation and a bounded wait.
 *
 * @param {Record<string, any>} session Active connection context.
 * @param {string} method ADS client method.
 * @param {...any} args Method arguments.
 * @returns {Promise<any>} ADS result.
 */
module.exports = (session, method, ...args) =>
    new Promise((resolve, reject) => {
        if (!session.isCurrent()) {
            reject(new Error('Connection changed'));
            return;
        }
        const timer = session.adapter.setTimeout(
            () => reject(new Error(`${method}: request timed out`)),
            session.adapter.config.adsTimeout + 500,
        );
        try {
            session.client[method](...args, (error, result) => {
                session.adapter.clearTimeout(timer);
                if (!session.isCurrent()) {
                    reject(new Error('Connection changed'));
                } else if (error) {
                    reject(error instanceof Error ? error : new Error(String(error)));
                } else {
                    resolve(result);
                }
            });
        } catch (error) {
            session.adapter.clearTimeout(timer);
            reject(error);
        }
    });
