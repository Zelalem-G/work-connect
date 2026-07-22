import { Card } from "./card";
import { Button } from "./button";
import { Avatar } from "./avatar";

export function WorkerRequestCard({
  name,
  location,
  avatar,
  price,
  priceType,
  description,
}) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex justify-between items-start">
        {/* Client Info */}
        <div className="flex items-center gap-3">
          <Avatar src={avatar} size="md" />
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <div className="flex items-center text-xs text-gray-500 gap-1 mt-0.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </div>
          </div>
        </div>

        {/* Price Info */}
        <div className="text-right">
          <div className="font-bold text-gray-900">{price}</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            {priceType}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        &quot;{description}&quot;
      </p>

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <Button variant="primary" fullWidth className="gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Accept
        </Button>
        <Button variant="secondary" fullWidth className="gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Reject
        </Button>
      </div>
    </Card>
  );
}
