import { nip59 } from "nostr-tools";


const parseContent = (kind,
    fiat_code,
    fiat_amount,
    amount,
    payment_method,
    premium,
    invoice,
    client,
    expiration_days) => {
    return {
        "order": {
            "version": 1,
            "action": "new-order",
            "content": {
                "order": {
                    "kind": kind,
                    "status": "pending",
                    "amount": amount,
                    "fiat_code": fiat_code,
                    "min_amount": null,
                    "max_amount": null,
                    "fiat_amount": fiat_amount,
                    "payment_method": payment_method,
                    "premium": premium,
                    "created_at": 0
                }
            }
        }
    }

}

export const newOrder = (content, my_key, mostro_key) => {

    return nip59.wrapEvent(content, my_key, mostro_key)
}