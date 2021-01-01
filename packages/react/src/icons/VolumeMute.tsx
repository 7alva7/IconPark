/**
 * @file VolumeMute 静音
 * @author Auto Generated by IconPark
 */

/* tslint:disable: max-line-length */
/* eslint-disable max-len */
import React from 'react';
import {ISvgIconProps, IconWrapper} from '../runtime';

export default IconWrapper(
    'volume-mute',
    true,
    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
            fill="none"
        >
            <mask
                id={props.id + '5d51747c'}
                maskUnits="userSpaceOnUse"
                x="30"
                y="18"
                width="13"
                height="13" style={{maskType: 'alpha'}}
            >
                <rect
                    x="30"
                    y="18"
                    width="13"
                    height="13"
                    fill={props.colors[2]}
                />
            </mask>
            <g
                mask={'url(#' + props.id + '5d51747c' + ')'}
            >
                <path
                    d="M40.7351 20.2858L32.2498 28.7711"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M32.2498 20.2858L40.735 28.7711"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
            </g>
            <path
                d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
