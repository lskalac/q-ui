import { describe, expect, it } from "vitest";
import {PostComment} from './../../../types/post.types';
import CommentList from "./CommentList";
import {render, screen} from '@testing-library/react';

describe('CommentList', () => {
    it('should display list of comments', () => {
        const comments: PostComment[] = [{
            id: 1,
            postId: 1,
            body: 'body',
            name: 'title',
            email: 'test@mail'
        }];

        render(<CommentList comments={comments} />);

        expect(screen.getByText(comments[0].name)).toBeDefined();
    })

    it('should display no data', () => {
        render(<CommentList comments={[]} />);

        expect(screen.getByTestId('no-data')).toBeDefined();
    })
})