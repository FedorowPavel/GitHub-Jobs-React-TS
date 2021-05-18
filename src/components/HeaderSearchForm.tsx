import React from 'react';

import Button from './UI/Button';
import InputSearch from './UI/InputSearch';

function HeaderSearchForm() {
    return (
        <form>
            <InputSearch type="text" placeholder="Title, companies, expertise or benefits" />
            <Button type="submit">Search</Button>
        </form>
    );
}

export default HeaderSearchForm;
