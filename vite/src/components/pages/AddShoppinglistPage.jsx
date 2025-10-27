import PageHeader from '../PageHeader';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { AddListForm } from './../AddListForm';
import HeaderBackButton from '../HeaderBackButton';
import PageHeaderContent from '../PageHeaderContent';
import PageContent from '../PageContent';
import LoadingLine from '../LoadingLine';

export function AddShoppinglistPage() {
    document.title = "Add list - Shopping List App";
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/lists');
    }

    return(
        <>
            <PageHeader>
                <HeaderBackButton onClick={handleClose} />
                <PageHeaderContent>
                    <Header header="Add Shopping list" />
                </PageHeaderContent>
            </PageHeader>
            <LoadingLine isLoading={isLoading} />
            <PageContent marginX={{ xs: 3, sm: 6 }} marginY={{ xs: 9, sm: 9 }}>
                <AddListForm setIsLoading={setIsLoading} handleClose={handleClose} />
            </PageContent>
        </>
    );
}