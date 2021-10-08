import React from 'react';

function PokemonCard (props) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Item>{ props.name }</Item>
            </Grid>
            <Grid item>
                <Item>{ props.url }</Item>
            </Grid>
            <Grid item>
                <Item>{ props.name }</Item>
            </Grid>
        </Grid>
    );
};

export default PokemonCard;