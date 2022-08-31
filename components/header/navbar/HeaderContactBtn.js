import Link from 'next/link';
import Button from '../../shared/button/Button';

const HeaderContactBtn = () => {
    return (
        <Button fontSize="0.75rem" padding="0.5rem 1.25rem" height="2rem">
            <Link href="mailto:hello@vherniellebis.tech">Send an email</Link>
        </Button>
    );
};

export default HeaderContactBtn;
