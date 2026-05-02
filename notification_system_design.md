# Notification Priority System

## Objective
To display the top 10 most important notifications based on type and recency.

---

## Approach

1. Fetch notifications from the API.
2. Assign priority based on notification type:
   - Placement → Highest priority
   - Result → Medium priority
   - Event → Lowest priority
3. Sort notifications based on:
   - Priority (descending)
   - Timestamp (latest first)
4. Select the top 10 notifications.

---

## Logic

Priority mapping:
- Placement = 3
- Result = 2
- Event = 1

Sorting condition:
- Higher priority first
- If same type → latest timestamp first

---

## Optimization

- Used efficient sorting (O(n log n))
- Limited output using slice(0,10)
- Can be optimized further using a heap for real-time systems

---

## Future Improvements

- Add pagination
- Add filters (type-based)
- Mark notifications as read/unread
- Real-time updates using WebSockets