import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  createUltimatePagination,
  ITEM_TYPES,
} from "react-ultimate-pagination";
import { Button, Pagination } from "react-daisyui";

type PageProps = {
  value?: number;
  isActive?: boolean;
  onClick?: () => void;
  isDisabled?: boolean | undefined;
};

type EllipsisProps = {
  onClick: () => void;
  isDisabled: boolean | undefined;
};

const Page = ({ value, isActive, onClick, isDisabled }: PageProps) => (
  <Button
    active={isActive ? true : false}
    onClick={onClick}
    disabled={isDisabled}
    responsive
  >
    {value}
  </Button>
);

const Ellipsis = ({ onClick, isDisabled }: EllipsisProps) => (
  <button onClick={onClick} disabled={isDisabled}>
    ...
  </button>
);

const FirstPageLink = () => null;

const PreviousPageLink = ({ onClick, isDisabled }: PageProps) => (
  <Button onClick={onClick} disabled={isDisabled} responsive>
    <FaArrowLeft />
  </Button>
);

const NextPageLink = ({ onClick, isDisabled }: PageProps) => (
  <Button onClick={onClick} disabled={isDisabled} responsive>
    <FaArrowRight />
  </Button>
);

const LastPageLink = () => null;

function Wrapper(props: any) {
  return <Pagination>{props.children}</Pagination>;
}

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink,
};

const UltimatePaginationBasic = createUltimatePagination({
  itemTypeToComponent,
  WrapperComponent: Wrapper,
});

export default UltimatePaginationBasic;
