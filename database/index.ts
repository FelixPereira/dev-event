/**
 * Centralized export for all database models
 * Import models from a single entry point: import { Event, Booking } from '@/database'
 */
export { default as Event } from './event.model';
export { default as Booking } from './booking.model';

// Re-export types for convenience
export type { IEvent } from './event.model';
export type { IBooking } from './booking.model';
