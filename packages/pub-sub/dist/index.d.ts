export type EventType = unknown;
export declare class PubSub {
    private events;
    private onceEvents;
    private static instance;
    static getInstance(): PubSub;
    on(event: EventType, callback: Function): void;
    off(event: EventType, callback: Function): void;
    once(event: EventType, callback: Function): void;
    emit(event: EventType, ...args: any[]): void;
    clear(): void;
}

export declare function getValWithUnit(val: string | number): string;
export declare function throttle(this: any, fn: Function, delay?: number, leading?: boolean): Function;
