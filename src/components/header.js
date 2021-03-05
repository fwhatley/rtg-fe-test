import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ siteTitle }) => {
    const items = useSelector(state => state.cart.items);
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

    const getItemCountText = () => {
        if (itemCount === 0) {
            return '';
        }
        return `(${itemCount} item${itemCount === 1 ? '' : 's'})`;
    };

    return (
        <header
            style={{
                background: `rebeccapurple`,
                marginBottom: `1.45rem`,
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem`,
                }}
            >
                <h1 style={{ margin: 0, position: `relative` }}>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                    <Link
                        to="/cart"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                            fontSize: `1rem`,
                            float: `right`,
                            position: `absolute`,
                            top: `1.5rem`,
                            right: `1.0875rem`,
                            fontWeight: `700`,
                        }}
                    >
                        CART {getItemCountText()}
                    </Link>
                </h1>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
