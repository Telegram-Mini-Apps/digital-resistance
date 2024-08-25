import { SVGProps } from 'react';

export const TelegramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.493 9.183c3.893-1.69 6.484-2.814 7.785-3.359C14.982 4.278 15.761 4.011 16.261 4c.111 0 .356.022.523.156.133.11.167.256.189.367.022.11.044.345.022.522-.2 2.114-1.068 7.24-1.512 9.599-.19 1-.556 1.334-.912 1.368-.779.066-1.368-.512-2.114-1.001-1.179-.768-1.835-1.246-2.98-2.002-1.324-.868-.467-1.346.289-2.125.2-.2 3.615-3.314 3.681-3.592.011-.033.011-.167-.066-.233-.078-.067-.19-.045-.279-.023-.122.023-1.99 1.268-5.627 3.726-.534.367-1.012.545-1.446.534-.478-.011-1.39-.267-2.08-.49-.834-.266-1.501-.41-1.446-.878.034-.245.367-.49.99-.745z"
        fill="currentColor"
      />
    </svg>
  );
};
